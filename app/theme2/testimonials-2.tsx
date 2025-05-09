'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: `${process.env.NEXT_PUBLIC_SITE_NAME} changed how I watch TV! The channel selection is amazing, and I love being able to watch my favorite shows on any device.`,
    location: 'New York, USA'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: `I\'ve tried many IPTV services, but ${process.env.NEXT_PUBLIC_SITE_NAME} is by far the most reliable. No buffering issues and 4K quality is superb!`,
    location: 'Toronto, Canada'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    rating: 4,
    text: 'Great value for money and excellent customer service. When I had an issue, they resolved it within minutes. Very impressed!',
    location: 'London, UK'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    rating: 5,
    text: 'The channel variety is incredible. I can watch sports from around the world that I couldn\'t access before. Totally worth it!',
    location: 'Barcelona, Spain'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    rating: 5,
    text: `I\'ve been using ${process.env.NEXT_PUBLIC_SITE_NAME} for 6 months now and have zero complaints. The app works flawlessly on all my devices.`,
    location: 'Sydney, Australia'
  }
];

const Testimonials2 = () => {

  return (
    <div
      id="testimonials"
      className="w-full flex flex-col flex-nowrap overflow-hidden pb-20"
    // [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]
    >
      <div className="text-center text-2xl md:text-4xl font-semibold text-gray-800 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
          What our client says about our services
        </h2>
      </div>
      <Marquee autoFill>
        {[ 
          // './whatsapp/testimonial_1.jpg', './whatsapp/testimonial_2.jpg', './whatsapp/testimonial_3.jpg',
          // './whatsapp/testimonial_4.jpg', './whatsapp/testimonial_5.jpg',
          './whatsapp/testimonial_1.webp', './whatsapp/testimonial_2.webp', './whatsapp/testimonial_3.webp',
          './whatsapp/testimonial_4.webp', './whatsapp/testimonial_5.webp', './whatsapp/testimonial_6.webp',
        ].map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden mx-4">
            <img src={item} alt={'testimonials ' + index} className="h-80" />
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default Testimonials2;
