import { useState } from "react";

function ClickerLess10() {

    const [click, setClick] = useState(0);

    const add1Click = () => {
        if (click < 10) setClick(prev => prev + 1)
    }

    const resetClicker = () => {
        setClick(0)
    }

    return (
        <>
            <h1>{click}</h1>
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                <button onClick={add1Click}>+ 1</button>
                <button onClick={resetClicker}>Сброс</button>
            </div>
        </>
    );
}

export default ClickerLess10;