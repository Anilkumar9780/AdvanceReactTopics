import React, { Component } from 'react'

// hoc component
import { HOCCounter } from './HOCCounter';

class Counter extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.handleCountPlus}>
                    {this.props.Counts}1 :{this.props.countValue}
                </h3>
            </div>
        )
    }
}
export default HOCCounter(Counter);