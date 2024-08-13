import {  createContext, useEffect, useState } from "react";

import { Children } from "react";

export const UserContext = createContext();

export const UserProvider  = ({children}) => {
    const [user , setUser] = useState(null);

    const userData = async(id) => {
        
       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
       const data = await response.json();
       setUser(data);
    }

    useEffect(()=>{
        userData(1)
    },[])

   return <UserContext.Provider value={{
   
    user  , userData

   }}>
    {children}
    </UserContext.Provider>
}

