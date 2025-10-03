import { useState } from "react";

function Form() {

    const [showInputText, setShowInputText] = useState('');

    return (
        <>
            <input type="text"
                value={showInputText}
                onChange={(e) => setShowInputText(e.target.value)} />
            <p>{showInputText}</p>
        </>
    );
}

export default Form;