import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-gray-200'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center md:flex-row md:text-left'>
        <div>
          <p className='text-base font-semibold text-gray-900'>
            Yousuf Khan
          </p>
          <p className='text-sm text-gray-600'>
            Full Stack Developer
          </p>
        </div>

        <p className='text-sm text-gray-500'>
          © {year} All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;