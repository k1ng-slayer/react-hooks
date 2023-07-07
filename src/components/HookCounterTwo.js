// useState Hook with prevState

import React from "react";
import { useState } from "react";

function HookCounterTwo() {
    const initalCount = 0;
    const [count, setCount] = useState(initalCount);

    // const incrementFive = () => {
    //     for (let i = 0; i < 5; i++) {
    //         setCount((prevCount) => prevCount + 1);
    //     }
    // };

    return (
        <>
            Count: {count}
            <br />
            <br />
            <button onClick={() => setCount(initalCount)}>Reset</button>
            <br />
            {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <br />
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                Decrement
            </button>
            <br />
            {/* <button onClick={incrementFive}>Increment by 5</button> */}
            <button onClick={() => setCount((prevCount) => prevCount + 5)}>
                Increment by 5
            </button>
        </>
    );
}

export default HookCounterTwo;
