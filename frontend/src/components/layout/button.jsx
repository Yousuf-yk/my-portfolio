import React from 'react';

const GlowButton = ({
  children = 'Click Me',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <>
      <style>{`
        .button-wrapper::before {
          animation: spin-gradient 4s linear infinite;
        }

        @keyframes spin-gradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="button-wrapper relative inline-block overflow-hidden rounded-full p-0.5 transition duration-300 hover:scale-105 active:scale-100 before:absolute before:inset-0 before:content-[''] before:bg-[conic-gradient(from_0deg,_#10B981,_#34D399,_#10B981)]">
        <button
          type={type}
          disabled={disabled}
          className={`relative z-10 rounded-full px-2 py-4 text-sm font-semibold text-white sm:px-8 sm:py-3 ${className}`}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default GlowButton;