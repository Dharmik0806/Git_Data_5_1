// function base componant
//rfc
import React, { useState } from 'react';

function Product(props) {

    // const [] = useState();
    const [productName, setproductName] = useState("Mobail");

    const changeProductName = () => {
        setproductName("Laptop");
    }

    return (
        <div>
            {productName}
            {/* with function */}
            <button onClick={() => changeProductName()}>change name</button>

        {/* without function */}
            {/* <button onClick={() => setproductName("laptop")}>change name</button> */}
        </div>
    );
}

export default Product;