import React, { useState } from 'react';

// context components
import FirstContext from './FirstContexts';
import SecondContext from './SecondContext';
import FourthContext from './FourthContext';
import ThreeContext from './ThreeContext';
import User from './User';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <FirstContext.Provider value={{ count, setCount }}>
                <SecondContext.Provider value={{ count, setCount }}>
                    <ThreeContext.Provider value={{ count, setCount }}>
                        <FourthContext.Provider value={{ count, setCount }}>
                            <User />
                        </FourthContext.Provider>
                    </ThreeContext.Provider>
                </SecondContext.Provider>
            </FirstContext.Provider>
        </div>
    );
}

export default App;
