import React, { useEffect, useState } from 'react';
import './App.css'



function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Получаем данные при монтировании компонента
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> — {todo.completed ? 'Выполнено' : 'Не выполнено'}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;