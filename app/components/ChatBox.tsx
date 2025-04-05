'use client';

import { useState } from 'react';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    setLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || 'Ошибка при получении ответа');
    } catch (err) {
      setAnswer('Произошла ошибка. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <textarea
        placeholder="Введите юридический вопрос..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: '100%',
          height: 100,
          padding: 12,
          borderRadius: 12,
          border: '1px solid #333',
          fontSize: 16,
          backgroundColor: '#1a1a1a',
          color: '#fff',
          resize: 'none',
        }}
      />
      <button
        onClick={ask}
        disabled={loading || !question.trim()}
        style={{
          marginTop: 16,
          padding: '12px 24px',
          borderRadius: 10,
          border: 'none',
          backgroundColor: '#4f46e5',
          color: '#fff',
          fontSize: 16,
          cursor: 'pointer',
          width: '100%',
        }}
      >
        {loading ? 'Обработка...' : 'Спросить OrionBot'}
      </button>

      {answer && (
        <div
          style={{
            marginTop: 32,
            backgroundColor: '#1f1f1f',
            padding: 20,
            borderRadius: 12,
            textAlign: 'left',
            color: '#ccc',
          }}
        >
          <strong style={{ color: '#fff' }}>Ответ:</strong>
          <p style={{ marginTop: 10, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{answer}</p>
        </div>
      )}
    </div>
  );
}
