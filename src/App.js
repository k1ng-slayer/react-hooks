import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterFive from "./components/ClassCounterFive";
import HookCounterFive from "./components/HookCounterFive";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import IndividualDataFetching from "./components/IndividualDataFetching";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

export const UserContext = React.createContext();
export const SportContext = React.createContext();

function App() {
    return (
        <div className="App">
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            {/* <HookCounterThree /> */}
            {/* <HookCounterFour /> */}
            {/* <ClassCounterFive /> */}
            {/* <HookCounterFive /> */}
            {/* <ClassMouse /> */}
            {/* <HookMouse /> */}
            {/* <MouseContainer /> */}
            {/* <IntervalClassCounter /> */}
            {/* <IntervalHookCounter /> */}
            {/* <DataFetching /> */}
            {/* <IndividualDataFetching /> */}
            <UserContext.Provider value={"Novak"}>
                <SportContext.Provider value={"Lawn Tennis"}>
                    <ComponentC />
                </SportContext.Provider>
            </UserContext.Provider>
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
        </div>
    );
}

export default App;
