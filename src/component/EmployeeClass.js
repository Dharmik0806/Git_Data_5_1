import React, { Component } from 'react';


const data = [
    {
        name: "Amit",
        age: 32,
        sallary: 34000,
        hobby: [
            "singing", "cricket", "traveling"
        ]
    },
    {
        name: "Krishna",
        age: 26,
        sallary: 30000,
        hobby: [
            "mouvi", "cooking", "traveling"
        ]
    },
    {
        name: "Rahul",
        age: 34,
        sallary: 50000,
        hobby: [
            "singing", "cricket", "traveling"
        ]
    },
    {
        name: "Ketan",
        age: 54,
        sallary: 100000,
        hobby: [
            "singing", "cricket", "traveling"
        ]
    }
]

class EmployeeClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            EmployeeData: data
        }

    }

    render() {
        return (
            <div>
                <h2>Class base 5_1</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sallary</th>
                        <th>Hobby</th>
                    </tr>

                    {
                       this.state.EmployeeData.map((b , i) => {
                            return(
                                <>
                                    <tr>
                                        <td>{b.name}</td>
                                        <td>{b.age}</td>
                                        <td>{b.sallary}</td>
                                        <td>{b.hobby.map((b1,i1) => {
                                            return(
                                                <>{b1}</>
                                            )
                                        })}</td>
                                    </tr>
                                </>
                            )
                       }) 
                    }
                </table>
            </div>
        );
    }
}

export default EmployeeClass;