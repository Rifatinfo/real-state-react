
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email, password);
    }
    
    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    })
    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
     // update profile 
    const updateProfileUser = (auth, email, password) =>{
        setLoading(true);
       return updateProfile(auth, email, password);
    }
   
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        updateProfileUser
    } ;
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;