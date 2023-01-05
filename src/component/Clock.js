import React, { Component } from 'react';

const heading = {
    fontSize : '50px',
    color : 'white',
    backgroundColor : 'black',
    border : '4px outset #ddc069',
    maxWidth : '400px',
    height : 'auto',
    textAlign : 'center',
    borderRadius : '5px',
    margin : '100px auto 0px auto',
    padding : '30px 10px 30px 10px'
}
class Clock extends Component {

    constructor(props) {    //1
        super(props);
        
        this.state = {
            time : new Date()
        }
    }

    tick = () => {     // 4
        this.setState({
            time : new Date()
        })
    }
    
    componentDidMount = () => {      //3
       this.timeref = setInterval(this.tick,1000);
    }

    componentDidUpdate = (prevProps , prevState) => {   // 6
        if(this.prevState !== this.state.time) {
            console.log("compnent did update call");
        }
    }

    componentWillUnmount = () => {     // 7
        clearInterval(this.timeref)
        console.log("componentDidnmount call");
    }
    render() {   //2   5
        return (
            <div>
               <h1 style={heading}> {this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;