import { useEffect, useState } from "react";

const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      // Create a temporary div with a fixed width
      const outer = document.createElement('div');
      outer.style.position = 'absolute';
      outer.style.top = '0';
      outer.style.left = '0';
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);

      // Create inner div
      const inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);

      // Calculate the difference
      const width = outer.offsetWidth - inner.offsetWidth;
      console.log('Calculated scrollbar width:', width);

      // Clean up
      document.body.removeChild(outer);
      setScrollbarWidth(width);
    };

    // Calculate initial width
    calculateScrollbarWidth();

    // Recalculate on window resize and scroll
    window.addEventListener('resize', calculateScrollbarWidth);
    window.addEventListener('scroll', calculateScrollbarWidth);

    // Cleanup
    return () => {
      window.removeEventListener('resize', calculateScrollbarWidth);
      window.removeEventListener('scroll', calculateScrollbarWidth);
    };
  }, []);

  return scrollbarWidth;
};

export default useScrollbarWidth;
