'use client';

import { useState } from 'react';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(''); // очистка

    const url = process.env.NEXT_PUBLIC_API_URL + '/ask';
    console.log('📤 Отправка запроса:', url, 'с вопросом:', question);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        console.error('❌ Ошибка ответа:', res.status, await res.text());
        setAnswer('Ошибка сервера. Попробуйте позже.');
      } else {
        const data = await res.json();
        console.log('📥 Ответ:', data);
        setAnswer(data.answer || 'Нет ответа');
      }
    } catch (err) {
      console.error('❗ Ошибка fetch:', err);
      setAnswer('Ошибка запроса. Проверьте соединение.');
    }

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
        <div style={{ marginTop: 20, whiteSpace: 'pre-wrap', color: '#fff' }}>
          <strong>Ответ:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
