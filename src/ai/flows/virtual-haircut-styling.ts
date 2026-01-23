'use server';
/**
 * @fileOverview A virtual haircut styling AI agent.
 *
 * - virtualTryOn - A function that handles the virtual haircut styling process.
 * - VirtualTryOnInput - The input type for the virtualTryOn function.
 * - VirtualTryOnOutput - The return type for the virtualTryOn function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VirtualTryOnInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the client's face, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  haircutStyle: z.string().describe('The desired haircut style to try on.'),
});
export type VirtualTryOnInput = z.infer<typeof VirtualTryOnInputSchema>;

const VirtualTryOnOutputSchema = z.object({
  styledPhotoDataUri: z
    .string()
    .describe('The photo with the virtual haircut applied, as a data URI.'),
});
export type VirtualTryOnOutput = z.infer<typeof VirtualTryOnOutputSchema>;

export async function virtualTryOn(input: VirtualTryOnInput): Promise<VirtualTryOnOutput> {
  return virtualTryOnFlow(input);
}

const prompt = ai.definePrompt({
  name: 'virtualTryOnPrompt',
  input: {schema: VirtualTryOnInputSchema},
  output: {schema: VirtualTryOnOutputSchema},
  prompt: `You are a virtual hairstylist. The client will upload a photo of themself and a desired hairstyle. You will use that information to generate a photo of the client with the desired hairstyle.

Use the following as the primary source of information about the client.

Hairstyle: {{{haircutStyle}}}
Photo: {{media url=photoDataUri}}

Respond with the photo of the client with the desired hairstyle.`,
});

const virtualTryOnFlow = ai.defineFlow(
  {
    name: 'virtualTryOnFlow',
    inputSchema: VirtualTryOnInputSchema,
    outputSchema: VirtualTryOnOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: `generate an image of this person with ${input.haircutStyle} hairstyle`},
      ],
      model: 'googleai/gemini-2.5-flash-image-preview',
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    return {styledPhotoDataUri: media.url!};
  }
);
