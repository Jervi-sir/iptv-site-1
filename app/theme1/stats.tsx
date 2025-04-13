export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">Why Choose {process.env.NEXT_PUBLIC_SITE_NAME}?</h2>
          <p>Stream thousands of live channels and on-demand content with unmatched quality and reliability.</p>
        </div>
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">15,000+</div>
            <p>Live Channels</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">99.9%</div>
            <p>Streaming Uptime</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">6</div>
            <p>Devices Supported</p>
          </div>
        </div>
      </div>
    </section>
  )
}