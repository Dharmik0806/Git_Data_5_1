// Function Base Component

import React, { useState } from 'react';

const student = [
    {
        RollNo : 1,
        Name : "Amit",
        Class : "A",
        Std : 12
    },
    {
        RollNo : 4,
        Name : "Rahul",
        Class : "A",
        Std : 10
    },
    {
        RollNo : 19,
        Name : "Hardik",
        Class : "c",
        Std : 9
    },
    {
        RollNo : 54,
        Name : "Om",
        Class : "A",
        Std : 8
    },
    {
        RollNo : 17,
        Name : "maulik",
        Class : "b",
        Std : 12
    },
]
function StudentData(props) {


    const[stuInfo , setstuInfo] = useState(student);

    return (
        <div>
            <h2>Function Base Component</h2>
            <table border={"2px"}>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Std</th>
                </tr>
                {
                    stuInfo.map((v,i) => {
                        return(
                                <tr>
                                    <td>{v.RollNo}</td>
                                    <td>{v.Name}</td>
                                    <td>{v.Class}</td>
                                    <td>{v.Std}</td>
                                </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default StudentData;