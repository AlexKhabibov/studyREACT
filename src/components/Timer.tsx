import { useEffect, useState, useRef } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = window.setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isRunning]);

    const toggleTimer = () => setIsRunning(prev => !prev);

    const add10Sec = () => setSeconds(prev => prev + 10);

    const resetTimer = () => setSeconds(0);

    return (
        <>
            <h1>{seconds}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={toggleTimer}>
                    {isRunning ? "Остановить таймер" : "Запустить таймер"}
                </button>
                <button onClick={add10Sec}>+10 sec</button>
                <button onClick={resetTimer}>Сбросить</button>
            </div>
        </>
    );
}

export default Timer;