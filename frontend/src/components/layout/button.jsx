import React from "react";

const GlowButton = ({
  children,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <>
      <style>{`
        @keyframes spin-gradient {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div
        className={`
          relative inline-flex overflow-hidden rounded-full
          p-[2px]
          transition-transform duration-300
          hover:scale-105 active:scale-100
          disabled:opacity-50
          ${disabled ? "pointer-events-none" : ""}
        `}
      >
        {/* Rotating gradient */}
        <div
          className="
            absolute inset-[-100%]
            animate-[spin-gradient_4s_linear_infinite]
            bg-[conic-gradient(from_0deg,#10B981,#34D399,#10B981,#059669,#10B981)]
          "
        />

        <button
          type={type}
          disabled={disabled}
          className={`
            relative z-10
            inline-flex items-center justify-center
            whitespace-nowrap
            rounded-full
            bg-emerald-600
            px-5 py-3
            text-sm font-semibold text-white
            transition-colors duration-300
            hover:bg-emerald-700
            disabled:cursor-not-allowed
            disabled:opacity-50

            sm:px-8

            ${className}
          `}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default GlowButton;