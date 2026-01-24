import Link from 'next/link';
import { Scissors } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-secondary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid justify-center text-center gap-8">
          <div className="space-y-2">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">ClipCut Membership</span>
            </Link>
            <p className="text-sm">Pașaportul tău pentru îngrijire premium.</p>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ClipCut. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
