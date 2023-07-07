// using useState with an Object

import React, { useState } from "react";

function HookCounterThree() {
    const [name, setName] = useState({ fname: "", lname: "" }); // state variable can be string/number/bool/object/array

    return (
        <>
            <form>
                <input
                    type="text"
                    name="fname"
                    value={name.fname}
                    onChange={(event) =>
                        setName({ ...name, fname: event.target.value })
                    } // copying every property in 'name' field & then overwriting 'fname'
                ></input>
                <br />
                <input
                    type="text"
                    name="lname"
                    value={name.lname}
                    onChange={(event) =>
                        setName({ ...name, lname: event.target.value })
                    }
                ></input>
                <br />
                <br />
                <p>
                    Your firstname is <i>{name.fname}</i>
                </p>
                <p>
                    Your lastname is <i>{name.lname}</i>
                </p>
                <p>{JSON.stringify(name)}</p>
                {/* we notice that 'useState' isnt merging & updating the object
        this is a drawback in hooks
        altho we can do that manually, easily with the help of 'spread' operator */}
            </form>
        </>
    );
}

export default HookCounterThree;
