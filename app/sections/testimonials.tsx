import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

const testimonials: Testimonial[] = [
  {
    name: 'Alex Carter',
    role: 'Sports Fan',
    image: '/profile/1.jpg',
    quote: `I get every major sports channel in 4K for $15/mo. ${siteName} is a steal!`,
  },
  {
    name: 'Maria Lopez',
    role: 'Parent',
    image: '/profile/2.jpg',
    quote: 'Setup took 5 minutes, and my kids love the cartoon channels. Best IPTV deal out there.',
  },
  {
    name: 'James Patel',
    role: 'Movie Buff',
    image: '/profile/3.jpg',
    quote: 'Thousands of movies and shows in one app. I canceled my cable subscription!',
  },
  {
    name: 'Sophie Nguyen',
    role: 'Student',
    image: '/profile/4.jpg',
    quote: 'Affordable and works great on my phone. Perfect for news and shows on a budget.',
  },
  {
    name: 'Liam Brooks',
    role: 'Retiree',
    image: '/profile/5.jpg',
    quote: 'Global channels keep me connected to my home country. Easy to use and reliable.',
  },
  {
    name: 'Emma Davis',
    role: 'Freelancer',
    image: '/profile/6.jpg',
    quote: 'No buffering, even on my old Wi-Fi. The channel selection is unreal.',
  },
  {
    name: 'Omar Khan',
    role: 'Techie',
    image: '/profile/7.jpg',
    quote: 'Streams perfectly on my Smart TV and tablet. Setup was a breeze.',
  },
  {
    name: 'Clara Rossi',
    role: 'Traveler',
    image: '/profile/8.jpg',
    quote: `I watch my favorite shows abroad with no issues. ${siteName} goes wherever I do.`,
  },
  {
    name: 'Ethan Kim',
    role: 'Gamer',
    image: '/profile/9.jpg',
    quote: '$9 for thousands of channels? It’s the best entertainment deal I’ve found.',
  },
  {
    name: 'Aisha Malik',
    role: 'Shop Owner',
    image: '/profile/10.jpg',
    quote: `Customers love the live sports in my café. ${siteName} keeps them coming back.`,
  },
  {
    name: 'Noah Schmidt',
    role: 'Fitness Coach',
    image: '/profile/11.jpg',
    quote: 'Live sports and fitness channels in one app. Perfect for my lifestyle.',
  },
  {
    name: 'Lila Torres',
    role: 'Teacher',
    image: '/profile/12.jpg',
    quote: 'No contracts and tons of educational channels. Best value for my family.',
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
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">Loved by IPTV Fans</h2>
            <p className="text-body mt-6">See why thousands trust { siteName } for live TV and on-demand streaming.</p>
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