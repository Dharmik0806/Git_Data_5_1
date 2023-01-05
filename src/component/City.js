import React, { Component } from 'react';

class City extends Component {

    // constructor(props) {
    //     super(props);  
    // }
    

    render() {
        return (
            <div>

                <h2>City : {this.props.cname === 'india' ? 'surat' : 'newyork'} </h2>
               
            </div>
        );
    }
}

export default City;