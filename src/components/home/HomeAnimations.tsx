export function HomeAnimations() {
  return (
    <style>
      {`
        @keyframes htHomeFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes htHomeSlowScale {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.035);
          }
        }

        @keyframes htHomeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .ht-home-fade {
          animation: htHomeFadeUp 0.85s ease both;
        }

        .ht-home-delay-1 {
          animation-delay: 0.12s;
        }

        .ht-home-delay-2 {
          animation-delay: 0.24s;
        }

        .ht-home-zoom {
          animation: htHomeSlowScale 18s ease-in-out infinite alternate;
        }

        .ht-home-float {
          animation: htHomeFloat 5s ease-in-out infinite;
        }
      `}
    </style>
  )
}