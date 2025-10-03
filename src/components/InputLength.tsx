import { useEffect, useState } from "react";

function InputLength() {

    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    }

    return (
        <>
            <h1>{text.length}</h1>
            <input
                placeholder="Введите текст"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={toggleVisibility}>{isVisible ? 'Скрыть текст' : 'Показать текст'}</button>
            {isVisible && text && <p>{text}</p>}
        </>
    );
}

export default InputLength;