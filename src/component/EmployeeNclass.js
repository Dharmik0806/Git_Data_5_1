import React, { Component } from 'react';

const Empdata = [
    {
        name: "Rahul",
        age: 34,
        hobby: "singing",
        sallary: {
            basicSalary: 40000,
            bonus: 10000,
        }
    },
    {
        name: "Ketan",
        age: 24,
        hobby: "traveling",
        sallary: {
            basicSalary: 55000,
            bonus: 12000,
        }
    },
    {
        name: "Rahul",
        age: 34,
        hobby: "singing",
        sallary: {
            basicSalary: 40000,
            bonus: 10000,
        }

    },
    {
        name: "Amit",
        age: 44,
        hobby: "cricket",
        sallary: {
            basicSalary: 55000,
            bonus: 5000,
        }
    }
]

class EmployeeNclass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            EmployeeData: Empdata
        }
    }

    render() {
        return (
            <div>
                <p>Class base component 5_1 ///</p>
                <table border={"1px"}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>hobby</th>
                        <th>sallary</th>
                    </tr>

                    {
                        this.state.EmployeeData.map((c , i) => {
                            return(
                                <>
                                <tr>
                                    <td>{c.name}</td>
                                    <td>{c.age}</td>
                                    <td>{c.hobby}</td>
                                    <td>{c.sallary.basicSalary},{c.sallary.bonus}</td>
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

export default EmployeeNclass;