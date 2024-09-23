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
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {renderIcon()}
    </button>
  );
};

export default ToggleTheme;
