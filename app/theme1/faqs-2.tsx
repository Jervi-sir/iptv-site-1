import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQsTwo() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How do I set up ' + process.env.NEXT_PUBLIC_SITE_NAME + '?',
      answer: 'Sign up, download our app or use a browser, and log in. You’ll be streaming in under 5 minutes!',
    },
    {
      id: 'item-2',
      question: 'What devices are supported?',
      answer: 'Smart TVs, Android, iOS, Firestick, laptops, and more—any device with our app or a browser works.',
    },
    {
      id: 'item-3',
      question: 'How many channels do I get?',
      answer: 'Up to 15,000+ live channels, depending on your plan, including sports, movies, and news.',
    },
    {
      id: 'item-4',
      question: 'Can I cancel anytime?',
      answer: 'Yes, no contracts! Cancel via your account or contact support with one click.',
    },
    {
      id: 'item-5',
      question: 'Will it buffer or lag?',
      answer: 'With 99.9% uptime and optimized servers, buffering is rare. Contact support for any issues.',
    },
  ]

  return (
    <section className="pt-16 md:pt-24 pb-10">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">IPTV Questions Answered</h2>
          <p className="text-muted-foreground mt-4 text-balance">Everything you need to know about streaming with {process.env.NEXT_PUBLIC_SITE_NAME}.</p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Accordion type="single" collapsible className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-dashed">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-muted-foreground mt-6 px-8 text-center">
            Need more help? Reach our{' '}
            <Link href="/#pricing" className="text-primary font-medium hover:underline">
              IPTV support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}