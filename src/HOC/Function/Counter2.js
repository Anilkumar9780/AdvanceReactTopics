import React from 'react';

// HOC Counter component
import { HOCCounter } from './HOCCounter';

const Counter2 = (props) => {
    const { handleCountPlus, count } = props;

    return (
        <div>
            <button
                onMouseLeave={handleCountPlus}
                className='btn btn-outline'
            >
                count2:   {count}
            </button>
        </div>
    );
}

export default HOCCounter(Counter2);
