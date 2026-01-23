'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Bot, Image as ImageIcon, Loader2, Sparkles, User, Wand2 } from 'lucide-react';
import { virtualTryOn } from '@/ai/flows/virtual-haircut-styling';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

export default function VirtualTryOnPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [hairstyle, setHairstyle] = useState<string>('a classic pompadour');
  const [isLoading, setIsLoading] = useState(false);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result as string;
        setImagePreview(dataUri);
        setOriginalImage(dataUri);
        setOutputImage(null); // Clear previous result
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!originalImage) {
      toast({
        variant: 'destructive',
        title: 'No Image Selected',
        description: 'Please upload a photo of yourself.',
      });
      return;
    }
    if (!hairstyle) {
      toast({
        variant: 'destructive',
        title: 'No Hairstyle Entered',
        description: 'Please describe the hairstyle you want to try.',
      });
      return;
    }

    setIsLoading(true);
    setOutputImage(null);

    try {
      const result = await virtualTryOn({
        photoDataUri: originalImage,
        haircutStyle: hairstyle,
      });
      setOutputImage(result.styledPhotoDataUri);
    } catch (error) {
      console.error('AI generation failed:', error);
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Failed to generate the hairstyle. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-secondary">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground">
             <Bot className="inline-block w-4 h-4 mr-1 mb-0.5" />
             AI Styling Tool
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Virtual Haircut Try-On
          </h1>
          <p className="text-muted-foreground md:text-xl">
            See your new look before you even sit in the chair. Upload a photo and let our AI show you the possibilities.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto mt-12 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-2">
                  <Label htmlFor="hairstyle">1. Describe a Hairstyle</Label>
                  <Input
                    id="hairstyle"
                    value={hairstyle}
                    onChange={(e) => setHairstyle(e.target.value)}
                    placeholder="e.g., short on the sides, long on top"
                    disabled={isLoading}
                  />
                </div>
                 <div className="space-y-2">
                  <Label>2. Upload Your Photo</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    ref={fileInputRef}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isLoading}
                  >
                    <ImageIcon className="mr-2 h-4 w-4 opacity-50" />
                    {imagePreview ? 'Change Photo' : 'Choose a photo'}
                  </Button>
                </div>
              </div>

              <Button type="submit" disabled={isLoading || !imagePreview || !hairstyle} size="lg">
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-5 w-5" />
                )}
                Generate New Look
              </Button>
            </form>

            {(isLoading || outputImage || originalImage) && <Separator className="my-8" />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start text-center">
              <div>
                <h3 className="font-headline text-lg font-medium mb-4 flex items-center justify-center gap-2"><User size={20}/> Your Photo</h3>
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  {originalImage ? (
                    <Image src={originalImage} alt="Original" width={500} height={500} className="object-cover w-full h-full" />
                  ) : (
                    <div className="text-muted-foreground flex flex-col items-center gap-2">
                      <ImageIcon size={40} />
                      <p>Your photo will appear here</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-headline text-lg font-medium mb-4 flex items-center justify-center gap-2"><Sparkles size={20}/> AI-Styled Look</h3>
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  {isLoading && (
                    <div className="flex flex-col items-center gap-4 text-primary">
                      <Loader2 size={40} className="animate-spin" />
                      <p className="text-muted-foreground">Styling in progress...</p>
                    </div>
                  )}
                  {!isLoading && outputImage && (
                    <Image src={outputImage} alt="Styled" width={500} height={500} className="object-cover w-full h-full" />
                  )}
                  {!isLoading && !outputImage && (
                    <div className="text-muted-foreground flex flex-col items-center gap-2">
                      <Bot size={40} />
                      <p>Your new look will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
