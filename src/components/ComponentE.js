import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { SportContext, UserContext } from "../App";

function ComponentE() {
  const user = useContext(UserContext);
  const sport = useContext(SportContext);

  return (
    <>
      {/* <ComponentF /> */}
      {user}: {sport}
    </>
  );
}

export default ComponentE;
