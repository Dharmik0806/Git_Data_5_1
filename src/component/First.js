import React, { Component } from 'react';

class First extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            age : 40
        }
       
    }
    
    changeAge = () => {
        this.setState({
            age : 50
        })
    }

    render() {
        return (
            <div>
                <h1>Age : {this.state.age}</h1>
                {/* <button onclick={this.changeAge}>Click</button> */}
                <button onClick={this.changeAge}>Click</button>

            </div>
        );
    }
}

export default First;

// import React from 'react';

// function First(props) {

//     // const [productName, setproductName] = useState("Mobail");
//     const [productName, setproductName] = useState("Samsang");

//     const changeProductName = () => {
//         setproductName("nokia");
//     }

//     return (
//         <div>
//             {productName}

//             <button onClick={() => changeProductName()}>change name</button>
//         </div>
//     );
// }

// export default First;