import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'india'
        }
    }
    
    changeName = () => {
        this.setState({
            countryName : 'UK'
        })  
    }

    render() {
        return (
            <div>
                <h1>country name : {this.state.countryName}</h1>
                <button onClick={this.changeName}>Change Country Name</button>
                
                {/* props */}
                <City cname={this.state.countryName} />           
            </div>
        );
    }
}

export default Country;