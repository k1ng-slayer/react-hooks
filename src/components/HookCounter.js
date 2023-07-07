// Counter App using function component

import React, { useState } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);
    // 'useState(0)' denotes inital value of variable 'count'
    // 'setCount' is the method that can update the value of 'count'
    // it is basically array destructuring

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
    );
}

export default HookCounter;
