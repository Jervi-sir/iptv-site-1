import { Library, Globe, Smartphone, Tv, FileX, Headphones } from 'lucide-react'

export default function Features4() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">All-in-One IPTV Solution</h2>
          <p>Stream live TV with features designed for ease, quality, and variety.</p>
        </div>
        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Library className="size-4" />
              <h3 className="text-sm font-medium">Live Sports</h3>
            </div>
            <p className="text-sm">Watch every game with premium sports channels included.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="size-4" />
              <h3 className="text-sm font-medium">Global Channels</h3>
            </div>
            <p className="text-sm">Stream content from over 50 countries in multiple languages.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Smartphone className="size-4" />
              <h3 className="text-sm font-medium">Any Device</h3>
            </div>
            <p className="text-sm">Compatible with Smart TVs, phones, tablets, and more.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Tv className="size-4" />
              <h3 className="text-sm font-medium">4K Streaming</h3>
            </div>
            <p className="text-sm">Enjoy movies and shows in stunning 4K where available.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileX className="size-4" />
              <h3 className="text-sm font-medium">No Contracts</h3>
            </div>
            <p className="text-sm">Cancel anytime with no penalties or hidden fees.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Headphones className="size-4" />
              <h3 className="text-sm font-medium">24/7 Support</h3>
            </div>
            <p className="text-sm">Get help anytime with our dedicated support team.</p>
          </div>
        </div>
      </div>
    </section>
  )
}