'use client';

import { useSpring, animated } from '@react-spring/web';
import {
  Shield,
  Server,
  Video,
  DollarSign,
  Headphones,
  Zap,
} from 'lucide-react';

export const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'Antifreeze Technology',
      description: 'Seamless streaming with Antifreeze tech.',
      icon: <Zap className="text-zinc-500" size={32} />,
    },
    {
      title: 'Fortified Security Measures',
      description: 'Your safety, our priority.',
      icon: <Shield className="text-zinc-500" size={32} />,
    },
    {
      title: 'Cutting-Edge Servers',
      description: 'Top-tier performance guaranteed.',
      icon: <Server className="text-zinc-500" size={32} />,
    },
    {
      title: 'Latest VODs & Series',
      description: 'Stay current, stay entertained.',
      icon: <Video className="text-zinc-500" size={32} />,
    },
    {
      title: 'Affordable Rates',
      description: 'Quality at a great price.',
      icon: <DollarSign className="text-zinc-500" size={32} />,
    },
    {
      title: '24/7 Online Support',
      description: 'Always here for you.',
      icon: <Headphones className="text-zinc-500" size={32} />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          WHY <span className="gradient-heading">CHOOSE US</span>
        </h2>
        <p className="text-lg text-white mb-8">
          We Are The Best IPTV Subscription Services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            // React Spring animation for hover effect
            const [springProps, api] = useSpring(() => ({
              scale: 1,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              config: { tension: 200, friction: 20 },
            }));

            const handleHover = () => {
              api.start({
                scale: 1.05,
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
              });
            };

            const handleUnhover = () => {
              api.start({
                scale: 1,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              });
            };

            return (
              <>
                {/* @ts-ignore */}
                <animated.div
                  key={index}
                  style={springProps}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleUnhover}
                  className="bg-zinc-900 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </animated.div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};