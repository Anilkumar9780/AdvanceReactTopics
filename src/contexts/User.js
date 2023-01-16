import React from 'react';

import { useContextFirst } from './ContextsCustomHooks/useFirstContext';

const User = () => {
    const { count, setCount } = useContextFirst();

    const handleIncrement = () => {
        setCount(count + 1)
    };

    const handleDncrement = () => {
        setCount(count - 1)
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDncrement}>Dncrement</button>
        </div>
    );
}

export default User;
