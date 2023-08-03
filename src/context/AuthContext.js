import React, { createContext,useState,useEffect } from 'react'
import {auth} from '../auth/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword} from 'firebase/auth';
import {signOut,updateProfile} from 'firebase/auth'
import {onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from "../helpers/TostNotify.js";

export const AutContext = createContext();




export const AuthContextProvider = ({children}) => {

    useEffect(() => {
  
        userObserver();
    
    
    }, [])

    let navigate=useNavigate();
    const [currentuser, setcurrentuser] = useState(false)

    //?yeni kullanıcı oluşturmak için kullanılır.
    const createUsers=async(email,password,displayName)=>{

      
        try {

           let userCredential = await createUserWithEmailAndPassword(auth, email, password)

           //displayname güncellemesi
            await updateProfile(auth.currentUser,{displayName})

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

    //? kullanıcı çıkış yapacağı zaman kullanılır
    const logOut = () => {
        signOut(auth);
        toastSuccessNotify("Logged out successfully!");
    };

    //?kullanıcının anlık olarka login bilgisini tutar sayfa her render olduğunda çalışır
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
    const values={createUsers,loginUsers,logOut,currentuser}

  return (

    <AutContext.Provider value={values}>
        {children}
    </AutContext.Provider>

  )
}
