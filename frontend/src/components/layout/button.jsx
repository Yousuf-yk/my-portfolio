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
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }

        .rainbow::before {
          content: "";
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 50% 30%;
          filter: blur(6px);
          background-image: linear-gradient(
            #ff0a7f,
            #780eff
          );
          animation: rotate 4s linear infinite;
        }

        .glow-button {
          background: #ffffff;
          color: #000000;
        }

        .dark .glow-button {
          background: #000000;
          color: #ffffff;
        }

        .glow-button:hover {
          background: #f8f8f8;
        }

        .dark .glow-button:hover {
          background: #111111;
        }
      `}</style>
{/* var(--border-color) */}
      <div
        className={`
          rainbow
          relative
          z-0
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-full
          p-0.5
          transition-transform
          duration-300
          hover:scale-105
          active:scale-100
          ${disabled ? "pointer-events-none opacity-50" : ""}
        `}
      >
        <button
          type={type}
          disabled={disabled}
          className={`
            glow-button
            relative
            z-10
            inline-flex
            items-center
            justify-center
            whitespace-nowrap
            rounded-full
            px-8
            py-3
            text-sm
            font-medium
            transition-colors
            duration-300
            disabled:cursor-not-allowed
            disabled:opacity-50
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