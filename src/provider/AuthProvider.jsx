/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebse.config";

 export const AuthContext = createContext();
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [ user, setuser] =useState(null);
const [ loading, setLoading]=useState(true);

const crateUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
}

 useEffect(()=>{
    const unsubserbe = onAuthStateChanged(auth,currentuser=>{
        setuser(currentuser);
        console.log('curren user', currentuser);
        setLoading(false)
    });
    return ()=>{
        return unsubserbe()
    }
 },[])

const authInfo ={
user,
loading,
crateUser,
signIn,
logOut,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;