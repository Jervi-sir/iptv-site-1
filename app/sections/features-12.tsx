'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tv, Globe, Smartphone, Video } from 'lucide-react' // Updated icons to match IPTV features
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'

export default function Features12() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/09/GettyImages-503685712-04cee8b.jpg?quality=90&resize=980,654', 
            alt: 'Thousands of Channels',
        },
        'item-2': {
            image: 'https://img.freepik.com/premium-photo/global-network-connection-illustrated-through-world-map-with-points-lines-representing-digital-business-connections-concept-global-network-connection-world-map-digital-business-connections_918839-57663.jpg?w=826', // Replace with an image of international flags or global content
            alt: 'Worldwide Content Access',
        },
        'item-3': {
            image: 'https://antmedia.io/wp-content/uploads/2020/12/multi-device-streaming.png', // Replace with an image of devices (TV, phone, tablet)
            alt: 'Multi-Device Streaming',
        },
        'item-4': {
            image: 'https://img.freepik.com/free-photo/screen-that-come-life_52683-107523.jpg?t=st=1744392606~exp=1744396206~hmac=90d15f1c5fc31ea5354ae9d9091110e1d9232fa5c84f6f0c966df55d1af9b658&w=996', // Replace with an image showcasing HD/4K quality
            alt: 'High-Quality Streaming',
        },
    }

    return (
        <section id='why_iptv' className="relative py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Why Our IPTV Stands Out</h2>
                    <p>Enjoy a seamless streaming experience with features designed for entertainment lovers everywhere.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Tv className="size-4" />
                                    Thousands of Channels
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Access over 10,000 live TV channels, from sports and news to movies and kids’ shows, all in one place.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Globe className="size-4" />
                                    Worldwide Content Access
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Stream international channels and on-demand content from over 50 countries, no matter where you are.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Smartphone className="size-4" />
                                    Multi-Device Streaming
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Watch on your TV, phone, tablet, or laptop—seamless streaming across all your devices.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Video className="size-4" />
                                    High-Quality Streaming
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Experience crystal-clear HD and 4K streams with 99.9% uptime for uninterrupted viewing.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}