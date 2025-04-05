// app/page.tsx
'use client';

import ChatBox from 'app/components/ChatBox';
import Image from 'next/image';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#111',
        padding: '60px 20px',
        color: '#fff',
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Image
          src="/orion-logo.png.png"
          alt="OrionBot Logo"
          width={120}
          height={120}
          style={{ margin: '0 auto', borderRadius: '16px' }}
        />
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0 10px', fontWeight: 'bold' }}>
          Добро пожаловать в OrionBot!
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#aaa', marginBottom: '30px' }}>
          Юридический AI-бот 24/7
        </p>
        <ChatBox />
      </div>
    </main>
  );
}
