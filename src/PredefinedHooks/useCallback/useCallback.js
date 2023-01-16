import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const UseCallback = () => {
    const [add, setAdd] = useState(0)
    const [count, setCount] = useState(0)

    const handleChild = useCallback(() => {
        //
    }, [count])

    const handleCount = () => {
        setCount(count + 1);
    };

    const handleAddition = () => {
        setAdd(add + 1)
    };

    return (
        <div>
            <ChildComponent handleChild={handleChild} count={count} />
            <button onClick={handleCount}>count</button>
            <br />
            <span>{add}</span>
            <br />
            <button onClick={handleAddition}>Addition</button>

        </div>
    );
}

export { UseCallback };
