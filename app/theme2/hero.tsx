'use client'
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tv, Wifi, Globe, Zap, MessageCircleIcon, MessageCircleCodeIcon, MessageCircleDashed } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 px-6 overflow-hidden max-w-7xl mx-auto">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-iptv-purple/10 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-iptv-blue/10 w-96 h-96 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-100">
              Upgrade Your, <span className="gradient-heading">IPTV</span> Experience to the Latest, <span className="gradient-heading">High-End</span> Standards!
            </h1>

            <p className="text-md md:text-md text-gray-700">
            +30,000 TV channels, including top-notch content from Netflix, Hulu, Apple TV+, Amazon Prime, Disney+, and HBO Max—all available on {process.env.NEXT_PUBLIC_SITE_NAME}
            </p>

            <div className="flex flex-wrap gap-4 pt-0">
              <Link href={`${process.env.NEXT_PUBLIC_REDIRECT_TO}/checkout`}>
                <Button className="btn-primary text-lg cursor-pointer"> <MessageCircleDashed /> WhatsApp</Button>
              </Link>
              <Link href="/#pricing">
                <Button variant="outline" className="text-lg cursor-pointer hover:bg-purple-200 hover:text-purple-800 hover:scale-105">View Plans</Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <Tv size={20} className="text-iptv-purple" />
                <span>10,000+ Channels</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi size={20} className="text-iptv-purple" />
                <span>HD Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-iptv-purple" />
                <span>Worldwide Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-iptv-purple" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-highlight p-4 md:p-4 border-violet-400 border-2 overflow-hidden">
              <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-iptv-purple/90 to-iptv-blue/90 flex items-center justify-center">
                  <img src='/feature/4.jpg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
