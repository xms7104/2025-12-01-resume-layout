import { useState, useEffect } from 'react';

function useInLayout(pixel) {
  const [isTouchDevice, setIsTouchDevice] = useState(window.innerWidth < pixel);

  useEffect(() => {
    const handleResize = () => {
      setIsTouchDevice(window.innerWidth < pixel);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pixel]);

  return isTouchDevice;
}

export default useInLayout;
