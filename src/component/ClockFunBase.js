import React, { useEffect, useState } from 'react';

function ClockFunBase(props) {

    //constructor
    const[time , settime] = useState(new Date());

    const tick=() => {
        settime(new Date());
    }

    useEffect(() => {
        setInterval(tick,1000);
        console.log("componentDidmount call");

        return() => {
            console.log("component will unmount");
        }
    },[])

    //render
    return (
        <div>
            {time.toLocaleString()}
        </div>
    );
}

export default ClockFunBase;