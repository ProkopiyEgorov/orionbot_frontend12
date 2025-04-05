'use client';

import Image from 'next/image';
import ChatBox from '@/components/ChatBox';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111] text-white px-6 py-12 text-center">
      <div className="flex flex-col items-center space-y-6 animate-fade-in">
        <Image
          src="/orion-logo.png"
          alt="OrionBot Logo"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-xl">
          Добро пожаловать в OrionBot!
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Юридический AI-бот 24/7
        </p>
      </div>
      <div className="mt-12 animate-fade-in-slow">
        <ChatBox />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
    </main>
  );
}
