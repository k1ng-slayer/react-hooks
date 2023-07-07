import React, { useEffect, useState } from "react";

function HookCounterFive() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // useEffect(function, dependancy) where dependancy is optional
    // useEffect hook executes after every render

    useEffect(() => {
        console.log(`useEffect: Updating`);
        document.title = `You clicked ${count} times`;
    }, [count]);

    // in the presence of a dependancy argument, useEffect() is executed only if dependancy argument changes

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Clicked <i>{count}</i> times
            </button>
        </>
    );
}

export default HookCounterFive;
