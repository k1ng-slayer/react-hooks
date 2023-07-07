import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        // function doSomething() {
        //   //define function in useEffect which is called in useEffect
        //   console.log(someProp);
        // }
        // doSomething();
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
        // }, [count]);
    });

    return (
        <>
            <>{count}</>
        </>
    );
}

export default IntervalHookCounter;
