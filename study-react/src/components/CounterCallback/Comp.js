import { useState } from "react";
import Counter from "./Counter";
import Icon from "./Icon";

function Comp() {

    const [component, setComponent] = useState('counter');

    const handleFinish = () => { setComponent('icon') }

    const handleReset = () => {
        setComponent('counter');
    }

    return (
        <div>
            {component === 'counter' && <Counter onFinish={handleFinish} />}
            {component === 'icon' && <Icon onReset={handleReset} />}
        </div>
    )
}

export default Comp;