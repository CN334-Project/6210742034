import { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState("")

    function logIn(email,password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => {
          unsubscribe();
      }
    }, [])
    

    return <AuthContext.Provider value={{user, logIn, logOut}}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}
