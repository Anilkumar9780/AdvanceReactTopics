import React, { Component } from 'react';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
// import

export default class index extends Component {
    render() {
        return (
            <div>
                <Counter1 />
                <Counter2 />
            </div>
        )
    }
}
