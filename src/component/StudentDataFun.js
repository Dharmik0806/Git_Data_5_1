import React, { Component } from 'react';

const student = [
    {
        RollNo: 1,
        Name: "Amit",
        Class: "A",
        Std: 12
    },
    {
        RollNo: 4,
        Name: "Rahul",
        Class: "A",
        Std: 10
    },
    {
        RollNo: 19,
        Name: "Hardik",
        Class: "c",
        Std: 9
    },
    {
        RollNo: 54,
        Name: "Om",
        Class: "A",
        Std: 8
    },
    {
        RollNo: 17,
        Name: "maulik",
        Class: "b",
        Std: 12
    },
]

class StudentDataFun extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentsdata: student
        };
    }


    render() {
        return (
            
            <div>
                <h1>Class base copmonent</h1>
                < table border={"1px"}>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Std</th>
                    </tr>

                    {
                        this.state.studentsdata.map((s, i) => {
                            return (
                                <tr>
                                    <td>{s.RollNo}</td>
                                    <td>{s.Name}</td>
                                    <td>{s.Class}</td>
                                    <td>{s.Std}</td>
                                </tr>

                            )
                        })
                    }

                </table>
            </div>
        );
    }
}

export default StudentDataFun;