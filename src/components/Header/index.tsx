import Image from 'next/image';
import Link from 'next/link';

import ToggleTheme from './toggleTheme';
import Avatar from '@/assets/avatar.jpg';
import MobileMenu from './mobileMenu';

const Header = () => (
  <div className="fixed top-4 z-[999] w-full">
    <div className="flex flex-row container items-center py-4 w-full justify-between px-8 bg-slate-100/60 dark:bg-[#1c191799] backdrop-blur-md backdrop-filter rounded-lg">
      <Link href="/" className="size-7">
        <Image
          src={Avatar}
          alt="Avatar"
          width={28}
          height={28}
          className="size-full rounded-full"
        />
      </Link>
      <div className="sm:flex flex-row gap-8 pl-8 w-full hidden">
        <Link href="/about">About</Link>
        <Link href="/about">Projects</Link>
      </div>
      <div className="flex flex-row gap-4">
        <ToggleTheme />
        <MobileMenu />
      </div>
    </div>
  </div>
);

export default Header;
