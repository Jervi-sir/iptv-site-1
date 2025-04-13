import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { DrawerTrigger } from '@/components/ui/drawer';
import { PricingDrawer } from './pricing-drawer';
import { pricingPlans } from '@/db/offers';

export default function Pricing1() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Best IPTV Plans – Save 20% Today
          </h1>
          <p id="pricing">
            Choose your plan and stream thousands of live channels with no contracts or hidden fees.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.bgClass || ''} ${plan.isPopular ? 'relative' : ''}`}>
              {plan.isPopular && (
                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                  Best Deal
                </span>
              )}
              <CardHeader>
                <CardTitle className="font-medium">{plan.title}</CardTitle>
                <span className="my-3 block text-2xl font-semibold">{plan.price}</span>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <PricingDrawer
                  triggerDrawerComponent={
                    <DrawerTrigger asChild>
                      <Button variant={plan.variant || 'default'} className="w-full cursor-pointer">
                        Get This Deal
                      </Button>
                    </DrawerTrigger>
                  }
                  plan={plan as any}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
