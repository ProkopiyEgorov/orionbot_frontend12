'use client';

import { useState } from 'react';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || '⚠️ Ответ не получен. Проверьте сервер.');
    } catch (error) {
      setAnswer('❌ Произошла ошибка. Попробуйте позже.');
    }

    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
      color: 'white',
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
        Добро пожаловать в OrionBot!
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Юридический AI-бот 24/7</p>

      <textarea
        placeholder="Введите юридический вопрос..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      <br />

      <button
        onClick={ask}
        disabled={loading}
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          backgroundColor: '#4c4cff',
          color: 'white',
          fontSize: '16px',
          borderRadius: '6px',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? 'Обработка...' : 'Спросить OrionBot'}
      </button>

      {answer && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#1a1a1a',
            borderRadius: '6px',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
          }}
        >
          <strong>Ответ:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
