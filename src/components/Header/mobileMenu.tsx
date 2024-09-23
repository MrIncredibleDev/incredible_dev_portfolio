'use client';
import { useEffect, useRef, useState } from 'react';
import {
  FaRegCircleQuestion,
  FaRegFolderOpen,
  FaRegPaperPlane
} from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="flex sm:hidden relative">
      <button onClick={() => setShowMenu(true)}>
        <GiHamburgerMenu className="h-5 w-5" />
      </button>
      <div
        className={`absolute top-[calc(100%)] right-0 bg-white dark:border-[#191512] dark:bg-[#0A0A0A] border-2 w-40 transition-all duration-300 overflow-hidden ${
          showMenu ? 'opacity-100' : 'opacity-0'
        }`}
        ref={menuRef}
      >
        <Link
          href="/about"
          className="gap-2 flex flex-row justify-start items-center px-2 py-1 w-full"
        >
          <FaRegCircleQuestion />
          About
        </Link>
        <Link
          href="/about"
          className="gap-2 flex flex-row justify-start items-center px-2 py-1 w-full"
        >
          <FaRegFolderOpen />
          Projects
        </Link>
        <Link
          href="/about"
          className="gap-2 flex flex-row justify-start items-center px-2 py-1 w-full"
        >
          <FaRegPaperPlane />
          Contact
        </Link>
        <Link
          href="/about"
          className="gap-2 flex flex-row justify-start items-center px-2 py-1 w-full"
        >
          <FiDownload />
          Download CV
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
