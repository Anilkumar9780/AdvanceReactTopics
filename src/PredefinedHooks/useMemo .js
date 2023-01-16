import React, { useState, useMemo } from 'react';

const UseMemo = () => {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(10)

    const handleAddition = () => {
        setAdd(add + 1)
    };

    const handleSubstration = () => {
        setMinus(minus - 1)
    };
    
    useMemo(() => {
        console.log(">>>>>>>>>>>")
        return add * 10;
    }, [add])



    return (
        <div>
            <span>{add}</span>
            <button onClick={handleAddition}>Addition</button>
            <br />
            <span>{minus}</span>
            <button onClick={handleSubstration}>Substration</button>
        </div>
    );
}

export default UseMemo;
