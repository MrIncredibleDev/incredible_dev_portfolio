'use client';

import { useTheme } from 'next-themes';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const renderIcon = () => {
    if (theme == 'light') {
      return <AiOutlineMoon className="h-5 w-5" />;
    }
    return <AiOutlineSun className="h-5 w-5" />;
  };

  return (
    <button
      className="relative size-9 justify-center items-center flex"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {renderIcon()}
      <div className="size-full bg-transparent rounded-full border border-[#F50537] absolute top-0 left-0 z-[-1] pulse-border" />
    </button>
  );
};

export default ToggleTheme;
