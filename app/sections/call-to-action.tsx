import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Get the Best IPTV Deal Now</h2>
          <p className="mt-4">Unlock 15,000+ live channels with a 20% discount—offer ends soon!</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <Link href="/#pricing">Claim Your Deal</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}