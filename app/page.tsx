// app/page.tsx
import ChatBox from '../components/ChatBox';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#111', padding: '60px 20px', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Добро пожаловать в OrionBot!</h1>
      <p style={{ marginBottom: '40px' }}>Юридический AI-бот 24/7</p>
      <ChatBox />
    </main>
  );
}
