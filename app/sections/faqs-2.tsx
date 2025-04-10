'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How do I set up my IPTV account?',
            answer: 'Setup is simple! After purchase, you’ll receive an email with your login details and instructions. Just download our app or use your credentials in a compatible IPTV player, and start streaming within minutes.',
        },
        {
            id: 'item-2',
            question: 'What devices can I use with this service?',
            answer: 'Our IPTV works on almost any device—Smart TVs, Android/iOS phones, tablets, laptops, Amazon Fire Stick, and more. If it supports an IPTV app, you’re good to go!',
        },
        {
            id: 'item-3',
            question: 'How many channels do I get?',
            answer: 'You’ll have access to thousands of live TV channels, including sports, movies, news, and international options. Exact numbers depend on your plan—check our pricing page for details!',
        },
        {
            id: 'item-4',
            question: 'Can I cancel my subscription anytime?',
            answer: 'Yes, there are no contracts! You can cancel your subscription at any time through your account dashboard or by contacting support. No hidden fees, no hassle.',
        },
        {
            id: 'item-5',
            question: 'What if I have buffering or technical issues?',
            answer: 'We offer 99.9% uptime, but if you experience issues, our 24/7 support team is here to help. Most buffering problems can be fixed with a quick internet check or device restart—reach out if you need assistance!',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Get answers to common questions about your IPTV subscription, from setup to streaming and beyond.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can’t find what you’re looking for? Contact our{' '}
                        <Link
                            href="/support"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}