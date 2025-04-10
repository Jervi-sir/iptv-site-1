import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing1() {
    return (
        <section id='pricing' className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Affordable IPTV Plans for Everyone</h1>
                    <p>Choose a plan that fits your streaming needs and enjoy thousands of channels, movies, and shows with no contracts or hidden fees.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className="flex flex-col bg-transparent">
                        <CardHeader>
                            <CardTitle className="font-medium">Basic</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$9 / mo</span>
                            <CardDescription className="text-sm">Single device streaming</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    '1,000+ Live TV Channels',
                                    'HD Streaming Quality',
                                    '24/7 Email Support',
                                    'Compatible with All Devices'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Most Popular</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Premium</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$15 / mo</span>
                                <CardDescription className="text-sm">Up to 3 devices</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        'Everything in Basic Plan',
                                        '5,000+ Live TV Channels',
                                        '4K Streaming Quality',
                                        'On-Demand Movies & Shows',
                                        'Priority Chat Support',
                                        'Multi-Device Streaming',
                                        'Sports Package Included'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href="">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col bg-transparent">
                        <CardHeader>
                            <CardTitle className="font-medium">Ultimate</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$25 / mo</span>
                            <CardDescription className="text-sm">Up to 5 devices</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Everything in Premium Plan',
                                    '10,000+ Live TV Channels',
                                    'Exclusive PPV Events',
                                    'VIP Phone Support',
                                    'Global Channel Access'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}