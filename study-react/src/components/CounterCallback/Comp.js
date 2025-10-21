import { useState } from "react";
import Counter from "./Counter";
import Icon from "./Icon";

function Comp() {

    const [component, setComponent] = useState('counter');

    const hnadleFinish = () => {
        setComponent('icon')
    }

    return (
        <div>
            {component === 'counter' && <Counter onFinish={hnadleFinish} />}
            {component === 'icon' && <Icon />}
        </div>
    )
}

export default Comp;