import React, { useState } from 'react'

export const HOCCounter = (WrappedComponent) => {
    const Counter = () => {
        const [count, setCount] = useState(0);

        const handleCountPlus = () => {
            setCount(count + 1)
        };

        return (<WrappedComponent
            count={count}
            handleCountPlus={handleCountPlus}
        />)
    }
    return Counter;
}