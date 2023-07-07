import React, { useEffect, useState } from "react";

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (event) => {
        console.log("mouse");
        setX(event.clientX);
        setY(event.clientY);
    };

    useEffect(() => {
        console.log("useEffect");
        window.addEventListener("mousemove", logMousePosition);
        // window.addEventListener("action", function );

        return () => {
            console.log("Component unmounting");
            window.removeEventListener("mousemove", logMousePosition);
        };
        // cleanup code / componentwillUnmount()
    }, []);
    // pass an empty array as we dont want useEffect to depend on anything, we just want it rendered once when we render it initially

    return (
        <>
            X: {x} Y: {y}
        </>
    );
}

export default HookMouse;
