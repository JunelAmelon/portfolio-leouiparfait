import React, { useEffect, useRef, useState } from 'react';

type Variant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' | 'rotate';

interface RevealProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

const hiddenClasses: Record<Variant, string> = {
  up: 'opacity-0 translate-y-10',
  down: 'opacity-0 -translate-y-10',
  left: 'opacity-0 translate-x-10',
  right: 'opacity-0 -translate-x-10',
  zoom: 'opacity-0 scale-90',
  fade: 'opacity-0',
  rotate: 'opacity-0 -rotate-3 translate-y-6',
};

/**
 * Reveals its children with a scroll-triggered animation the first time they
 * enter the viewport. Pass a different `variant` per usage so sections don't
 * all animate the same way.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  delay = 0,
  duration = 800,
  className = '',
  as = 'div',
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      onClick={onClick}
      className={`transition-all ease-out will-change-transform ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100' : hiddenClasses[variant]
      } ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
