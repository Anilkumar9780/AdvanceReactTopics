import React, { useRef, useState } from 'react';

const UseRef = () => {
    const [name, setName] = useState('Anil kumar')
    const refElement = useRef();

    const handleReset = () => {
        setName('')
        refElement.current.focus()
    };

    const handleInput = () => {
        refElement.current.style.color = "red"
        refElement.current.value= 'Anik'
    }

    return (
        <div>
            <input
                type='text'
                ref={refElement}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleInput}>InputColor</button>
        </div>
    );
}

export { UseRef };
