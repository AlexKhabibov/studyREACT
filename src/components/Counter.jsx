import { useEffect } from 'react';
import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0); // в useState хранием начальное значение
    const [status, setStatus] = useState('статус 0'); // храним статус, который будет показывать: "больше нуля", "меньше нуля" или "ноль".

    useEffect(() => {
        if (count > 0) setStatus('статус больше 0')
        else if (count < 0) setStatus('статус меньше 0')
        else setStatus('статус 0')
    }, [count]) // следим за изменением count и отталкиваясь от его состояия устанавливаем состояние status


    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count => count + 1)}>+</button >
            <button onClick={() => setCount(count => count - 1)}>-</button >
            <div>{status}</div>
        </>
    );
}

export default Counter;