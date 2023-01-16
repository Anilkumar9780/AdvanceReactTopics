import React from 'react'

export const HOCCounter2 = (WrappedComponent) => {
    const Counter = () => {
        return (<WrappedComponent
            name='Name :-  Anik'
        />)
    }
    return Counter;
}