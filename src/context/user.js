import React from "react";

//creating a context object for user data
const UserContext = React.createContext();

//create a provider component that will give access to the context data to its children components
function UserProvider({ children }) {
    const currentUser = {
        name: "Duanne",
        interests: ["coding", "Biking", "reading"]
    };
    // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return (
  <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );

}
export { UserContext, UserProvider };