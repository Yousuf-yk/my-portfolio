import React from 'react';

const GlowButton = ({ children = 'Click Me' }) => {
  return (
    <>
      <style>{`
        .button-wrapper::before {
          animation: spin-gradient 4s linear infinite;
        }

        @keyframes spin-gradient {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="button-wrapper relative inline-block overflow-hidden rounded-full p-0.5 transition duration-300 hover:scale-105 active:scale-100 before:absolute before:inset-0 before:content-[''] before:bg-[conic-gradient(from_0deg,_#10B981,_#34D399,_#10B981)]">
        <button className="relative z-10 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white">
          {children}
        </button>
      </div>
    </>
  );
};

export default GlowButton;