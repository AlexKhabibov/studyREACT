import { useState } from "react";

function Counter({ onFinish }) {

    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(value + 1);
        if (value === 5 && onFinish) onFinish()
    }

    return (
        <button onClick={handleClick}>+ {value}</button>
    );
}

export default Counter;