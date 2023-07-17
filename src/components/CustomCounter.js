import React from "react";
import useCounter from "../hooks/useCounter";

function CustomCounter() {
    const [count, increment, decrement, reset] = useCounter(1, 5);

    return (
        <>
            Count {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default CustomCounter;
