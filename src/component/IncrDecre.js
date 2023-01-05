//class base

import React, { Component } from 'react';

class IncrDecre extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            count : 0
        }
    }
    

    countUp = () => {
        if(this.state.count < 5) {
            this.setState({
                count : this.state.count + 1
            })
        }
    }

    countDown = () => {
        if(this.state.count > 0 ) {
            this.setState({
                count : this.state.count - 1
            })
        }
    }
    render() {
        return (
            <div>
               
                <button onClick={this.countUp}>+</button>
                < h1>{this.state.count}</h1>
                <button onClick={this.countDown}>-</button>
            </div>
        );
    }
}

export default IncrDecre;