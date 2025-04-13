import { Logo } from '@/components/logo'
import { Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

const links = [
  { name: 'Features', href: '#features' }, // Highlights platform benefits
  { name: 'Pricing', href: '#pricing' },   // Key for sales
  { name: 'Feedback', href: '#feedback' }, // Replaces "About" for customer help
  { name: 'Why IPTV', href: '#why_iptv' }, // Showcases available channels
]

export default function FooterSection() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME

  return (
    <footer className="py-8 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/#pricing" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary block duration-150">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="https://facebook.com/jerviiptv" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary block">
            <Facebook />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} {siteName}, All rights reserved
        </span>
      </div>
    </footer>
  )
}