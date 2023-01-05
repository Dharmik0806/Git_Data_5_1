import React, { useState } from 'react';

const data = [
    {
        name : "Amit",
        age : 32,
        sallary : 34000,
        hobby : [
            "singing","cricket","traveling"
        ]
    },
    {
        name : "Krishna",
        age : 26,
        sallary : 30000,
        hobby : [
            "mouvi","cooking","traveling"
        ]
    },
    {
        name : "Rahul",
        age : 34,
        sallary : 50000,
        hobby : [
            "singing","cricket","traveling"
        ]
    },
    {
        name : "Ketan",
        age : 54,
        sallary : 100000,
        hobby : [
            "singing","cricket","traveling"
        ]
    }
]
function Employee(props) {

    const[EmployeeData , setEmployeeData] = useState(data);

    return (
        <div>
            <h2>Function base 5_1</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sallary</th>
                    <th>Hobby</th>
                </tr>

              {
                EmployeeData.map((a,i) => {
                    return(
                        <>
                        <tr>
                            <td>{a.name}</td>
                            <td>{a.age}</td>
                            <td>{a.sallary}</td>
                            <td>{a.hobby.map((a1,i1) => {
                                {
                                    return(
                                        <>{a1}</>
                                    )
                                }
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

export default Employee;