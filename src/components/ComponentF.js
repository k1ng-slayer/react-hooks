import React from "react";
import { SportContext, UserContext } from "../App";

function ComponentF() {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <SportContext.Consumer>
              {(sport) => {
                return (
                  <>
                    User context value: {user}, playing {sport}
                  </>
                );
              }}
            </SportContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}

export default ComponentF;
