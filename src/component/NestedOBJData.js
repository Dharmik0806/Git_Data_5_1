import React, { Component } from 'react';

const info = [
    {
        name: "hardik",
        age: 12,
        std: 11,
        subMark: {
            English: 85,
            Gujrati: 55,
            Hindi: 87
        }
    },
    {
        name: "Varun",
        age: 33,
        std: 10,
        subMark: {
            English: 90,
            Gujrati: 65,
            Hindi: 68
        }
    },
    {
        name: "vishvas",
        age: 9,
        std: 6,
        subMark: {
            English: 88,
            Gujrati: 96,
            Hindi: 89
        }
    }
]
class NestedOBJData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stuData: info
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Std</th>
                        <th>Subject Mark</th>
                    </tr>

                    {
                        this.state.stuData.map((a, i) => {
                            return (
                                <tr>
                                    <td>{a.name}</td>
                                    <td>{a.age}</td>
                                    <td>{a.std}</td>

                                    {
                                        // a.subMark.map((a, b) => {
                                        //     <td>a.Gujrati</td>
                                        // })
                                        
                                    }
                                   
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default NestedOBJData;