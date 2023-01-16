import React, { Component } from 'react'

//component hoc
import { HOCCounter } from './HOCCounter'

class Counter2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 onMouseOver={this.props.handleCountPlus}>
                        {this.props.Counts}2 :{this.props.countValue}
                    </h3>
                </div>
            </div>
        )
    }
}
export default HOCCounter(Counter2);