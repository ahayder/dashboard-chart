import { useState, useEffect, useCallback } from "react";

function useContainerDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = useCallback((entries) => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      setDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(ref.current);

      // Clean up the observer on component unmount
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [ref, updateDimensions]);

  return dimensions;
}

export default useContainerDimensions;
