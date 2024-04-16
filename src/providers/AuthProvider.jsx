import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut= () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
     const unsubscribe =  onAuthStateChanged(auth, currentUser => {
           console.log('user on the on state changed', currentUser)
          setUser(currentUser)
          setLoading(false)

        })
        return () => {
            unsubscribe() 
        }
    })
    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value = {authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
}

export default AuthProvider;