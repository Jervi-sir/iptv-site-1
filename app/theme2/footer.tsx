
import { contacts } from '@/db/contacts';
import { ShoppingBagIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-iptv-deep-purple text-white pt-16 pb-8 px-6 md:px-12 bg-violet-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-iptv-purple to-iptv-blue bg-clip-text text-white">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </h3>
            <p className="text-white ">
              Your premium IPTV solution for unlimited entertainment on any device, anywhere.
            </p>
            <div className="flex flex-col gap-4 items-center md:flex-row">
              {[
                { icon: <PhoneIcon size={18} /> , name: 'Contact', url: contacts.whatsapp,  },
                { icon: <ShoppingBagIcon size={18} /> , name: 'Subscribe to ' + process.env.NEXT_PUBLIC_SITE_NAME, url: '#pricing',  },
              ].map((item, index) => (
                <Link key={index} href={item.url} className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 border-b-4 border-violet-600 hover:border-violet-500 rounded flex flex-row items-center cursor-pointer gap-2 text-sm transition">
                  {item.icon} {item.name}
                </Link>
              ))}
            </div>
            <ul className="space-y-3 flex flex-col justify-between items-center">
              {/* <li className="flex items-center">
                <Mail size={18} className="mr-2 text-iptv-purple" />
                <a href="mailto:support@streamsizzle.com" className="text-gray-300 hover:text-white transition-colors">
                  support@streamsizzle.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-iptv-purple" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className='text-white'>
            &copy; {currentYear} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
