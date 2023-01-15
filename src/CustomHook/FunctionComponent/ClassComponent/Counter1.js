import React from "react";

//costom hook
import { useCounter } from "./useCounter";

export const Counter1 = () => {
    const [count, handleDncrement, handleIncrement] = useCounter(10);
    return (
        <div>
            <h4>Counter1</h4>
            <div
                className="btn btn-outline"
            >
                {count}
            </div>
            <br />
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleDncrement}
            >Dncrement
            </button>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleIncrement}
            >
                Increment
            </button>
        </div>
    )
};