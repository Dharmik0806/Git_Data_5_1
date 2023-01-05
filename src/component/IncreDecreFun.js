import React, { useState } from 'react';

const IncreDecreFun = () => {

    const [count , setcount] = useState(0);

    const countUp = () => {
        if(count < 5) {
            setcount(count + 1);
        }
    }

    const countDown = () => {
        if(count > 1 ) {
            setcount(count - 1)
        }
    }

    return (
        <div style={{textAlign : "center"}}>
            <button onClick={() => countUp()}> + </button>
            <h1>{count}</h1>
            <button onClick={() => countDown()}> - </button>
        </div>
    );
};

export default IncreDecreFun;