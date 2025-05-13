import { useEffect, useState } from "react";

const useStickyHeaderHeight = (ref: React.RefObject<HTMLElement | null> | undefined) => {
  const [height, setHeight] = useState(() => {
    // Initialize with the current height if available
    if (ref?.current) {
      return ref.current.offsetHeight;
    }
    return 0;
  });

  useEffect(() => {
    if (!ref) {
      console.log('useStickyHeaderHeight - No ref provided');
      return;
    }

    const updateHeight = () => {
      if (ref.current) {
        const newHeight = ref.current.offsetHeight;
        console.log('useStickyHeaderHeight - New height:', newHeight);
        if (newHeight > 0) {
          setHeight(newHeight);
        }
      } else {
        console.log('useStickyHeaderHeight - No current element');
      }
    };

    console.log('useStickyHeaderHeight - Initial update');
    updateHeight();

    // Create a ResizeObserver to watch for height changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref]);

  return height;
};

export default useStickyHeaderHeight; 