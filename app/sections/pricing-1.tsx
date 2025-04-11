
'use client'
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
import Link from 'next/link';

// Define the type for a pricing plan
interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  variant?: 'outline' | 'default';
  bgClass?: string;
  purchases?: number;
  priceId: string;
}

// Define the array of pricing plans with purchase data and Price IDs
const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic',
    price: '$9 / mo',
    description: 'Single device streaming',
    features: [
      '1,000+ Live TV Channels',
      'HD Streaming Quality',
      '24/7 Email Support',
      'Compatible with All Devices',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1200,
    priceId: '',
  },
  {
    title: 'Premium',
    price: '$15 / mo',
    description: 'Up to 3 devices',
    features: [
      'Everything in Basic Plan',
      '5,000+ Live TV Channels',
      '4K Streaming Quality',
      'On-Demand Movies & Shows',
      'Priority Chat Support',
      'Multi-Device Streaming',
      'Sports Package Included',
    ],
    isPopular: true,
    variant: 'default',
    purchases: 3500,
    priceId: '',
  },
  {
    title: 'Ultimate',
    price: '$25 / mo',
    description: 'Up to 5 devices',
    features: [
      'Everything in Premium Plan',
      '10,000+ Live TV Channels',
      'Exclusive PPV Events',
      'VIP Phone Support',
      'Global Channel Access',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 800,
    priceId: '',
  },
];

export default function Pricing1() {
  // Function to handle button click and redirect
  const handleUnlockClick = () => {
    window.open('https://www.ammiteboune.com/#pricing_unlocked', '_blank');
  };

  return (
    <section id="pricing" className="py-16 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Affordable IPTV Plans for Everyone
          </h1>
          <p>
            Choose a plan that fits your streaming needs and enjoy thousands of channels, movies,
            and shows with no contracts or hidden fees.
          </p>
        </div>

        {/* Pricing Cards with Blur and Pattern */}
        <div className="relative">
          <div className="diagonal-pattern">
          {/* <div className=""> */}
          {/* <div className="w-full absolute inset-0 right-0 ml-auto bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div> */}
          <div
              className={`blur-md mt-8 pt-8 grid gap-6 md:mt-20 md:grid-cols-3 transition-all duration-300`}
            >
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${plan.bgClass || ''} ${
                    plan.isPopular ? 'relative' : ''
                  }`}
                >
                  {plan.isPopular && (
                    <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                      Most Popular
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
                    <Button variant={plan.variant || 'default'} className="w-full">
                        Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Unlock Button (Visible when blurred) */}
          {true && (
            <div className="absolute top-0 bottom-0 inset-0 flex flex-col gap-7 items-center justify-center">
              <h1 className="text-center text-3xl font-semibold lg:text-5xl">Pricing</h1>
              <Button
                onClick={handleUnlockClick}
                className="cursor-pointer bg-neutral-950 text-white hover:bg-amber-800"
                size={'lg'}
              >
                Unlock Pricing Now!
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}