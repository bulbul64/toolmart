import React from 'react';
import { Coffee } from 'lucide-react'; // Lucide থেকে যেকোনো আইকন

const Footer = () => {
  return (
    <footer className='bg-neutral text-gray-400 pt-20 pb-10'>
      {/* Top Section */}
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10'>
        {/* Brand */}
        <div className='md:col-span-2 space-y-4'>
          <h2 className='text-3xl font-bold text-white'>DigiTools</h2>
          <p className='text-sm leading-relaxed max-w-sm'>
            Premium digital tools for creators, professionals, and businesses. Work smarter with our
            suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className='text-white font-semibold mb-4'>Product</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Features
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className='text-white font-semibold mb-4'>Company</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className='text-white font-semibold mb-4'>Resources</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Community
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className='max-w-6xl mx-auto px-4 mt-12'>
        <div className='h-px bg-gray-700'></div>
      </div>

      {/* Bottom Section */}
      <div className='max-w-6xl mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
        {/* Copyright */}
        <p className='text-sm text-center md:text-left'>
          © {new Date().getFullYear()} DigiTools. All rights reserved.
        </p>

        {/* Links */}
        <div className='flex gap-6 text-sm'>
          <a
            href='#'
            className='hover:text-white'
          >
            Terms
          </a>
          <a
            href='#'
            className='hover:text-white'
          >
            Privacy
          </a>
          <a
            href='#'
            className='hover:text-white'
          >
            Cookies
          </a>
        </div>

        {/* Social Icons (Lucide) */}
        <div className='flex gap-4'>
          <a
            href='#'
            className='hover:text-white'
          >
            <Coffee size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
