import React, { createContext,useState } from 'react'
import {auth} from '../auth/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword} from 'firebase/auth';
import {signOut} from 'firebase/auth'
import {onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from "../helpers/TostNotify.js";

export const AutContext = createContext();



export const AuthContextProvider = ({children}) => {

    let navigate=useNavigate();
    const [currentuser, setcurrentuser] = useState(false)

    //?yeni kullanıcı oluşturmak için kullanılır.
    const createUsers=async(email,password)=>{


        try {

           let userCredential = await createUserWithEmailAndPassword(auth, email, password)

            //console.log("yakalanan data",userCredential)
            navigate('/')
            toastSuccessNotify("Registered successfully!");
        } catch (error) {
            toastErrorNotify(error.message);

        }
        
    } 

    //?kullanıcı login olduğunda çalışan metod
    const loginUsers=async(email,password)=>{
        try {

            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


            navigate('/')
            toastSuccessNotify("Logged in successfully!");

        } catch (error) {
            toastErrorNotify(error.message);
        }
    }

    const logOut = () => {
        signOut(auth);
        toastSuccessNotify("Logged out successfully!");
      };

    const userObserver=()=>{
        
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const { email, displayName, photoURL } = user;
                setcurrentuser({ email, displayName, photoURL });
            
            } else {
                setcurrentuser(false)
            }
          });
    }

    //yukarıda oluşturulan createUsers fonksiyonu context olarak paylaşılır.
    const values={createUsers,loginUsers,logOut,userObserver,currentuser}

  return (

    <AutContext.Provider value={values}>
        {children}
    </AutContext.Provider>

  )
}
