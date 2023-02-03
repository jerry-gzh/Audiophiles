import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; //Métodos proporcionados por firebase
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  //Nos dará la info del user
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

//AuthProvider debe estar en los componentes que accederán a sus datos
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
  }, []);

  //Todos los componentes tendrán acceso a user
  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}
