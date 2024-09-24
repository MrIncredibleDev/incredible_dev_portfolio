import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillSkype
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

import ToggleTheme from './toggleTheme';
import Avatar from '@/assets/avatar.jpg';

const Footer = () => (
  <div className="border-t border-[#F50537] w-full">
    <div className="container justify-center items-center flex flex-col">
      <Link
        href="/"
        className="size-10 rounded-full -translate-y-5 border-2 border-[#EF0303]"
      >
        <Image
          src={Avatar}
          alt="avatar"
          height={40}
          width={40}
          className="rounded-full size-full"
        />
      </Link>
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center items-center py-8">
        <Link
          href="/about"
          className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
          download={true}
        >
          <p className="text-xs md:text-sm">About</p>
        </Link>
        <Link
          href="/about"
          className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
          download={true}
        >
          <p className="text-xs md:text-sm">Projects</p>
        </Link>
        <Link
          href="/about"
          className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
          download={true}
        >
          <p className="text-xs md:text-sm">Contact</p>
        </Link>
        <Link
          href="/about"
          className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
          download={true}
        >
          <p className="text-xs md:text-sm">Download CV</p>
        </Link>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center items-center py-8 gap-6">
        <div className="flex flex-row flex-wrap justify-center items-center gap-6">
          <Link
            href="mailto:lachlan.pelletier.ellitedev@gmail.com"
            target="_blank"
            className="p-2 rounded-lg text-slate-600 hover:text-[#F50537] border group relative"
          >
            <AiOutlineMail className="size-5 group-hover:size-7 transition-all duration-300" />
          </Link>
          <Link
            href="https://github.com/MrIncredibleDev"
            target="_blank"
            className="p-2 rounded-lg text-slate-600 hover:text-[#F50537] border group"
          >
            <AiOutlineGithub className="size-5 group-hover:size-7 transition-all duration-300" />
          </Link>
          <Link
            href="https://linkedin.com/in/lachlan-pelletier-86820632a"
            target="_blank"
            className="p-2 rounded-lg text-slate-600 hover:text-[#F50537] border group"
          >
            <AiFillLinkedin className="size-5 group-hover:size-7 transition-all duration-300" />
          </Link>
          <Link
            href="https://join.skype.com/invite/e1x1PLisbBaG"
            target="_blank"
            className="p-2 rounded-lg text-slate-600 hover:text-[#F50537] border group"
          >
            <AiFillSkype className="size-5 group-hover:size-7 transition-all duration-300" />
          </Link>
          <Link
            href="https://t.me/mr-incredible_dev"
            target="_blank"
            className="p-2 rounded-lg text-slate-600 hover:text-[#F50537] border group"
          >
            <FaTelegram className="size-5 group-hover:size-7 transition-all duration-300" />
          </Link>
        </div>
        <ToggleTheme />
      </div>
      <div className="py-8">
        © 2024 Made by <b>Incredible Dev</b>💪
      </div>
    </div>
  </div>
);

export default Footer;
