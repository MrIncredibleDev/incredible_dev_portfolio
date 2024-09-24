'use client';
import Image from 'next/image';
import { Fireworks } from '@fireworks-js/react';
import PartyFace from '@/assets/party.gif';
import './hero.css';

const Hero = () => (
  <div className="relative overflow-hidden">
    <div className="w-full pt-[120px] container m-auto pb-20 gap-8 flex flex-col px-4 select-none justify-center items-center min-h-screen">
      <div className="flex flex-row gap-2 text-2xl w-full justify-center items-center">
        <Image src={PartyFace} alt="partyface" width={128} height={128} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-full text-center text-[45px] sm:text-[60px]">
          Welcome!
        </div>
        <div className="text-center w-full text-md sm:text-lg text-slate-600 dark:text-slate-400">
          I am Lachlan and this is where my passion for development comes to
          life.
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center text-[60px] gap-x-2 gap-y-4 bg-black px-5 py-2.5 rounded-lg">
        <span className="neon-blue">
          C<span id="fade">rea</span>te
        </span>
        <span className="neon-red">Incredible</span>
        <span className="neon-blue" id="trav">
          Products
        </span>
      </div>
    </div>
    <Fireworks
      options={{
        opacity: 0.5
      }}
      className="top-0 left-0 w-full h-full absolute bg-transparent z-[-1]"
    />
  </div>
);

export default Hero;
