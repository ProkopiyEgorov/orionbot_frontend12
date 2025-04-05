'use client';

import dynamic from 'next/dynamic';

const ChatBox = dynamic(() => import('./components/ChatBox'), { ssr: false });

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#111', padding: '60px 20px', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Добро пожаловать в OrionBot!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#ccc' }}>Юридический AI-бот 24/7</p>
      <ChatBox />
    </main>
  );
}

