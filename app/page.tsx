'use client';

import { useState } from 'react';

export default function HomePage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    setLoading(true);
    setAnswer('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || 'Ошибка при получении ответа.');
    } catch (err) {
      setAnswer('Произошла ошибка. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#111',
        padding: '60px 20px',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      {/* ЛОГОТИП */}
      <img
        src="/orion-logo.png"
        alt="Логотип OrionBot"
        style={{
          width: '100px',
          margin: '0 auto 20px',
        }}
      />

      <h1 style={{ fontSize: '2.5rem', marginBottom: 10 }}>
        Добро пожаловать в OrionBot!
      </h1>
      <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: 40 }}>
        Юридический AI-бот 24/7
      </p>

      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <textarea
          placeholder="Введите юридический вопрос..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: 'none',
            resize: 'vertical',
          }}
        />
        <button
          onClick={ask}
          disabled={loading}
          style={{
            marginTop: '16px',
            backgroundColor: '#4F46E5',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          {loading ? 'Обработка...' : 'Спросить OrionBot'}
        </button>

        {answer && (
          <div
            style={{
              backgroundColor: '#1e1e1e',
              marginTop: '32px',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #333',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
            }}
          >
            <strong style={{ display: 'block', marginBottom: 10 }}>Ответ:</strong>
            {answer}
          </div>
        )}
      </div>
    </main>
  );
}
