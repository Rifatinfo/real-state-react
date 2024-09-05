
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth,email, password);
    }
    
    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    })
    
    const logOut = () =>{
        return signOut(auth);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn
    } ;

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;