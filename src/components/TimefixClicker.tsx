import { useRef, useState } from "react";

function TimefixClicker() {

    const [clicksCount, setClicksCount] = useState(0);
    const lastClickTime = useRef<Date | null>(null);

    const handleClick = () => {
        setClicksCount(prev => prev + 1);
        lastClickTime.current = new Date();
    }

    return (
        <>
            <button onClick={handleClick}>Click to set current time in list</button>
            <div>{clicksCount}</div>
            <div><p>Последний клик: {lastClickTime.current?.toLocaleTimeString()}</p></div>
        </>
    );
}

export default TimefixClicker;