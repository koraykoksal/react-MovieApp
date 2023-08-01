import React, { createContext } from 'react'
import {auth} from '../auth/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const AutContext = createContext();



export const AuthContextProvider = ({children}) => {

    let navigate=useNavigate();

    //?yeni kullanıcı oluşturmak için kullanılır.
    const createUsers=async(email,password)=>{


        try {

           let userCredential = await createUserWithEmailAndPassword(auth, email, password)

            //console.log("yakalanan data",userCredential)

        } catch (error) {

            console.log(error)

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
            //console.log("login users: ",userCredential)

        } catch (error) {
            console.log(error)
        }
    }

    //yukarıda oluşturulan createUsers fonksiyonu context olarak paylaşılır.
    const values={createUsers,loginUsers}

  return (

    <AutContext.Provider value={values}>
        {children}
    </AutContext.Provider>

  )
}
