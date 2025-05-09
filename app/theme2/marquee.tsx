'use client'
import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

export const MarqueeSection = () => {

  return (
    <div
      className="w-full pb-10 inline-flex flex-nowrap overflow-hidden"
      //  [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]
    >
      <Marquee autoFill direction='right'>
        {[
          { name: 'afl', url: './channels/afl.webp', invert: false },
          { name: 'caf', url: './channels/caf.webp', invert: false },
          { name: 'cricket', url: './channels/cricket.webp', invert: false },
          { name: 'f1', url: './channels/f1.webp', invert: false },
          { name: 'fifa', url: './channels/fifa.webp', invert: false },
          { name: 'nfl', url: './channels/nfl.webp', invert: false },
          { name: 'nhl', url: './channels/nhl.webp', invert: false },
          { name: 'nrl', url: './channels/nrl.webp', invert: false },
          { name: 'premiere', url: './channels/premiere.webp', invert: true },
          { name: 'uefa', url: './channels/uefa.webp', invert: true },
          { name: 'ufc', url: './channels/ufc.webp', invert: false },
          { name: 'world', url: './channels/world.webp', invert: false },
        ].map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.name} className={`h-20 px-4  ${item.invert && 'invert'}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};