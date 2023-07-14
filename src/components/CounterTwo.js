// using 'useReducer()' hook (complex)

import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                firstCounter: state.firstCounter + action.value,
            };
        case "decrement":
            return {
                ...state,
                firstCounter: state.firstCounter - action.value,
            };
        case "increment2":
            return {
                ...state,
                secondCounter: state.secondCounter + action.value,
            };
        case "decrement2":
            return {
                ...state,
                secondCounter: state.secondCounter - action.value,
            };
        case "reset":
            return initialState;

        default:
            return state;
    }
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            A. Count: {count.firstCounter}
            <br />
            B. Count: {count.secondCounter}
            <br />
            <br />
            <button
                onClick={() => {
                    dispatch({ type: "increment", value: 1 });
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decrement", value: 1 });
                }}
            >
                Decrement
            </button>
            <br />
            <button
                onClick={() => {
                    dispatch({ type: "increment", value: 5 });
                }}
            >
                Mega Increment
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decrement", value: 5 });
                }}
            >
                Mega Decrement
            </button>
            <br />
            <br />
            <button
                onClick={() => {
                    dispatch({ type: "increment2", value: 1 });
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decrement2", value: 1 });
                }}
            >
                Decrement
            </button>
            <br />
            <br />
            <button
                onClick={() => {
                    dispatch({ type: "reset" });
                }}
            >
                Reset
            </button>
        </>
    );
}

export default CounterTwo;
