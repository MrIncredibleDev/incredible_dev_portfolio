'use client';
import { useEffect } from 'react';

import { renderCanvas } from '@/utils/canvas';

const Home = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="h-full w-full relative bg-transparent">
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </div>
  );
};

export default Home;
