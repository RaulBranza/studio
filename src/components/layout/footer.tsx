import Link from 'next/link';
import { Scissors } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Yelp', href: '#' },
];

export function Footer() {
  return (
    <footer className="text-secondary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">ClipCut Membership</span>
            </Link>
            <p className="text-sm">Your passport to premium grooming.</p>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ClipCut. All rights reserved.</p>
          </div>
          <div className="grid gap-4">
            <h4 className="font-semibold font-headline">Get in Touch</h4>
            <div className="text-sm space-y-2">
              <p>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
              </p>
              <p>
                <a href="mailto:contact@clipcut.com" className="hover:text-primary transition-colors">contact@clipcut.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between">
           <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
