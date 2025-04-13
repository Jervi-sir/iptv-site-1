import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Library, Smartphone, Tv } from 'lucide-react' // Updated icons for neutral context
import { ReactNode } from 'react'

export default function Features1() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Why {process.env.NEXT_PUBLIC_SITE_NAME} Stands Out</h2>
          <p className="mt-4">Enjoy live TV and on-demand content with features built for you.</p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5 bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Library className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">10,000+ Channels</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Access live sports, movies, news, and kids’ channels from around the world.</p>
            </CardContent>
          </Card>
          <Card className="group shadow-zinc-950/5 bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Smartphone className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Stream Anywhere</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm">Watch on Smart TVs, phones, tablets, or laptops—no limits.</p>
            </CardContent>
          </Card>
          <Card className="group shadow-zinc-950/5 bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Tv className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">4K Quality</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-3 text-sm">Enjoy crystal-clear streams with 4K and HDR on supported plans.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
    <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
  </div>
)