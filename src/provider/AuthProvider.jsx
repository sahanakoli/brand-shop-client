/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = (value) =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, [])

   const userInfo = {
      user,
      loading,
      googleSignIn,
      createUser,
      signIn,
      logOut
   }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;