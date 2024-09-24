'use client';

import { useTheme } from 'next-themes';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-row rounded-full border p-1">
      <button
        onClick={() => setTheme('dark')}
        className={`rounded-full p-2  ${
          theme === 'dark' ? 'bg-[#F50537] text-white' : ''
        }`}
      >
        <AiOutlineMoon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`rounded-full p-2  ${
          theme === 'light' ? 'bg-[#F50537] text-white' : ''
        }`}
      >
        <AiOutlineSun className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ToggleTheme;
