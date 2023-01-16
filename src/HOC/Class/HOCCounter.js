import React, { Component } from 'react';

export const HOC = Component1 => {
    class newComponent extends Component {
        constructor() {
            super();
            this.state = { count: 0 };
        }

        handleCountPlus = () => {
            this.setState({ count: this.state.count + 1 })
        }

        render() {
            return <Component1
                handleCountPlus={this.handleCountPlus}
                countValue={this.state.count}
                Counts='Count'
            />
        }
    }
    return newComponent;
}
