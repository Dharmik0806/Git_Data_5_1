import React, { useState } from 'react';

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


function EmployeeNobj(props) {

    const [employee, setemployee] = useState(Empdata);

    return (
        <div>
            <h2>Function base 5_1 </h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>hobby</th>
                    <th>sallary</th>
                </tr>

                {
                    employee.map((a, i) => {
                        return (
                            <>
                                <tr>
                                    <td>{a.name}</td>
                                    <td>{a.age}</td>
                                    <td>{a.hobby}</td>
                                    <td>{a.sallary.basicSalary} ,{a.sallary.bonus}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default EmployeeNobj;