import Link from 'next/link';
import { Scissors, Phone, Instagram, MapPin } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

const contactDetails = {
    phone: '0733357222',
    instagram: 'https://www.instagram.com/_clipcut_?igsh=NTRmNWlvbmthenho',
    address: 'Strada Carpatilor nr 93 500423 Brasov Romania',
};

// Assuming Romanian number, the international format for WhatsApp would be +40...
// We remove the leading '0' and prepend '40'
const whatsappPhoneNumber = `40${contactDetails.phone.substring(1)}`;
const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}`;

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`;


export function Footer() {
  return (
    <footer className="text-secondary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">ClipCut Membership</span>
            </Link>
            <p className="text-sm">Your passport to premium grooming.</p>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ClipCut. All rights reserved.</p>
          </div>
          
          <div className="space-y-4">
             <h4 className="font-semibold font-headline">Get in Touch</h4>
             <div className="text-sm space-y-3">
                <p>
                    <a href={`tel:${contactDetails.phone}`} className="hover:text-primary transition-colors flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        <span>{contactDetails.phone}</span>
                    </a>
                </p>
                <p>
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>{contactDetails.address}</span>
                    </a>
                </p>
             </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Social Media</h4>
            <div className="flex items-center gap-4">
                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="WhatsApp">
                    <WhatsAppIcon className="h-6 w-6" />
                 </a>
                 <a href={contactDetails.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                 </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
