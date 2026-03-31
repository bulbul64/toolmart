import { FaFacebookF, FaTwitter, FaGithub, FaCoffee } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-neutral text-gray-400 pt-20 pb-10'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10'>
        <div className='md:col-span-2 space-y-4'>
          <h2 className='text-3xl font-bold text-white'>DigiTools</h2>
          <p className='text-sm leading-relaxed max-w-sm'>
            Premium digital tools for creators, professionals, and businesses. Work smarter with our
            suite of powerful tools.
          </p>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4'>Product</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Features
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Integrations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4'>Company</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4'>Resources</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Community
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 mt-12'>
        <div className='h-px bg-gray-700'></div>
      </div>

      <div className='max-w-6xl mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-sm text-center md:text-left'>
          © {new Date().getFullYear()} DigiTools. All rights reserved.
        </p>

        <div className='flex gap-6 text-sm'>
          <a
            href='#'
            className='hover:text-white transition'
          >
            Terms
          </a>
          <a
            href='#'
            className='hover:text-white transition'
          >
            Privacy
          </a>
          <a
            href='#'
            className='hover:text-white transition'
          >
            Cookies
          </a>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4'>
          <a
            href='#'
            className='p-2 rounded-full hover:bg-gray-800 hover:text-white transition'
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href='#'
            className='p-2 rounded-full hover:bg-gray-800 hover:text-white transition'
          >
            <FaTwitter size={16} />
          </a>
          <a
            href='#'
            className='p-2 rounded-full hover:bg-gray-800 hover:text-white transition'
          >
            <FaGithub size={16} />
          </a>
          <a
            href='#'
            className='p-2 rounded-full hover:bg-gray-800 hover:text-white transition'
          >
            <FaCoffee size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
