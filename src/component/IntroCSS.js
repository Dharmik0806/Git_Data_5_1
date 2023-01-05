import React, { Component } from 'react';
import './MyStyle.css'

class IntroCSS extends Component {

    constructor(props) {
        super(props);
        
        const mystyle = {
            color : "red",
            backgroundcolor : "pink" ,
            padding : "20px" 
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={{color: "red" , background:"pink"}}>Hellow</h1>
                <h2 className='primary' >Hellow Javascript</h2>
            </div> 
        );
    }
}

export default IntroCSS;