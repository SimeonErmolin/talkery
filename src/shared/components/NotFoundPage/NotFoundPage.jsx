import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 — Страница не найдена</h1>
      <p>Такой страницы нет. Возможно, вы ввели неправильный адрес.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
