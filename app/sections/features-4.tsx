import { Tv, Globe, Smartphone, Video, Clock, Shield } from 'lucide-react' // Updated icons for IPTV context

export default function Features4() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Your Ultimate Streaming Solution</h2>
                    <p>Experience entertainment like never before with features built for seamless, high-quality viewing.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Tv className="size-4" />
                            <h3 className="text-sm font-medium">Vast Channel Selection</h3>
                        </div>
                        <p className="text-sm">Stream thousands of live TV channels, covering sports, movies, news, and more.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4" />
                            <h3 className="text-sm font-medium">Global Access</h3>
                        </div>
                        <p className="text-sm">Enjoy content from around the world, with channels and shows from over 50 countries.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Smartphone className="size-4" />
                            <h3 className="text-sm font-medium">Device Flexibility</h3>
                        </div>
                        <p className="text-sm">Watch on any device—TV, phone, tablet, or laptop—with no extra hassle.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Video className="size-4" />
                            <h3 className="text-sm font-medium">Top-Notch Quality</h3>
                        </div>
                        <p className="text-sm">Get HD and 4K streaming with minimal buffering for a smooth experience.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            <h3 className="text-sm font-medium">Instant Setup</h3>
                        </div>
                        <p className="text-sm">Start streaming in minutes—no complicated setup or long waits required.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Reliable Service</h3>
                        </div>
                        <p className="text-sm">Count on 99.9% uptime and secure streams for uninterrupted entertainment.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}