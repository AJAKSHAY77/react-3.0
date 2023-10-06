import React, { createContext } from 'react'
const Usercontext = createContext({
    user: {
        name: "akshay",
        email: "aj@gail.com"
    
    }
})
export default Usercontext;

// here we can give default value all over the app and after Usercontext .provider we can replace the default value
