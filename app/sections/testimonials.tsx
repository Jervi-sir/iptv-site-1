import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Alex Carter',
        role: 'Movie Enthusiast',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'This IPTV service is a game-changer! Thousands of channels and on-demand movies at my fingertips—worth every penny.',
    },
    {
        name: 'Maria Lopez',
        role: 'Busy Mom',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        quote: 'I set it up in minutes, and now my kids can watch their favorite shows while I catch up on live sports. So easy to use!',
    },
    {
        name: 'James Patel',
        role: 'Sports Fan',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        quote: 'The sports package is unreal—every game, every league, in HD. I’ve ditched cable for good.',
    },
    {
        name: 'Sophie Nguyen',
        role: 'Student',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        quote: 'As a broke student, this is the best deal ever. Tons of channels, no contracts, and it works perfectly on my phone.',
    },
    {
        name: 'Liam Brooks',
        role: 'Retiree',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: 'I love the variety—news, old movies, and international channels. It’s like having the world in my living room.',
    },
    {
        name: 'Emma Davis',
        role: 'Freelancer',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        quote: 'Streaming quality is top-notch, even on my slow Wi-Fi. Plus, the support team helped me set up in no time.',
    },
    {
        name: 'Omar Khan',
        role: 'Tech Hobbyist',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'The multi-device feature is a lifesaver—I watch on my TV, laptop, and tablet without missing a beat.',
    },
    {
        name: 'Clara Rossi',
        role: 'Travel Blogger',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        quote: 'I can take my shows anywhere I go. The international channels keep me connected to home while I’m on the road.',
    },
    {
        name: 'Ethan Kim',
        role: 'Gamer',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        quote: 'Affordable price, crystal-clear streams, and PPV events included? This IPTV service is a total win.',
    },
    {
        name: 'Aisha Malik',
        role: 'Small Business Owner',
        image: 'https://randomuser.me/api/portraits/women/10.jpg',
        quote: 'My customers love the live TV in my shop. Setup was a breeze, and it’s been rock-solid ever since.',
    },
    {
        name: 'Noah Schmidt',
        role: 'Fitness Coach',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'The channel lineup is insane—sports, news, and entertainment all in one place. I’m hooked!',
    },
    {
        name: 'Lila Torres',
        role: 'Teacher',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        quote: 'No more expensive cable bills. This IPTV gives me everything I need at a fraction of the cost.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section id='feedback'>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Loved by Our Viewers</h2>
                        <p className="text-body mt-6">See why thousands of happy customers choose our IPTV service every day.</p>
                    </div>
                    <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3 *:border-none *:shadow-none">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>{name.charAt(0)}{name.split(' ')[1]?.charAt(0) || ''}</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}