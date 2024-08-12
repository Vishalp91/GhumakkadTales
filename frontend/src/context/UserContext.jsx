// React context is a way to share a global state with all the components 
// that inherit from this component instead of passing down the props to child components from parent

import { createContext, useState } from "react";

export const UserContext = createContext();  // this is a context (store containing global state) which will be commonly accessed by other components

const UserProvider = ({children}) => {  // this component is going to provide the global state all the components which ask for them 

    const [user, setUser] = useState({
        username : localStorage.getItem('username'),
        email : localStorage.getItem('email'),
        posts : []
    });

    return <UserContext.Provider value = {{user, setUser}}> {children} </UserContext.Provider>  // check above line to understand it's meaning
}

export default UserProvider;