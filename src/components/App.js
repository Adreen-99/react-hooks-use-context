import React  from "react";
import Header from "./Header";
import Profile from "./Profile";
import { ThemeProvider } from "../context/Theme";  
//import the provider
import { UserProvider } from "../context/user";


function App() {

  return (
    <ThemeProvider>
    <main>
      {/* Wrap the components that need access to the context with UserProvider */}
      <UserProvider>
      <Header />
      <Profile />
      </UserProvider>
    </main>
    </ThemeProvider>
  );
}

export default App;
