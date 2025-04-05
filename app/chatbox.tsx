'use client';

import { useState } from 'react';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    setLoading(true);
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer || 'Ошибка при получении ответа');
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <textarea
        placeholder="Введите юридический вопрос..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: 10 }}
      />
      <button onClick={ask} disabled={loading} style={{ marginTop: 10 }}>
        {loading ? 'Обработка...' : 'Спросить OrionBot'}
      </button>
      {answer && (
        <div style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
          <strong>Ответ:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
