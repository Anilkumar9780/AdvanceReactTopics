import React from 'react';


// HOC counter component
import { HOCCounter } from './HOCCounter';
import { HOCCounter2 } from './HOCCounter2';

const Counter1 = (props) => {
    const { handleCountPlus, name, count } = props;

    return (
        <div>
            <button
                onMouseOver={handleCountPlus}
                className='btn btn-outline'
            >
                count1:   {count}
            </button>
            <br />
            <h5>{name}</h5>
        </div>
    );
}
const HOC = (HOCCounter, HOCCounter2)

const EnhancedComponent = HOC(Counter1);

export default EnhancedComponent;
