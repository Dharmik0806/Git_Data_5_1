import React, { Component } from 'react';

class Phone extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            PhoneName : "Samsang"
        }
    }

    changeMobail = () => {
        this.setState({
            PhoneName : "Nokia"
        })
    }
    
    render() {
        return (
            <div>
                <h1>Mobail : {this.state.PhoneName}</h1>
                <button onClick={this.changeMobail}>Change Mobail</button>

                <PhoneAccessorize mobail={this.state.PhoneName} />

            </div>
        );
    }
}

export default Phone;