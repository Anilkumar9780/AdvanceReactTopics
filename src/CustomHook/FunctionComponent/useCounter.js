import { useState } from 'react';

export const useCounter = (initalValue = 0) => {
    const [count, setCount] = useState(initalValue);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDncrement = () => {
        setCount(count - 1);
    }

    return [count, handleDncrement, handleIncrement];
}