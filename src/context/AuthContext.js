import React, { createContext } from 'react'
import {auth} from '../auth/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';



export const AutContext = createContext();


export const AuthContextProvider = ({children}) => {

    //?yeni kullanıcı oluşturmak için kullanılır.
    const createUsers=async(email,password)=>{

        console.log("gonderilen data : ",email,password)

        try {

           let userCredential = await createUserWithEmailAndPassword(auth, email, password)

            console.log("yakalanan data",userCredential)

        } catch (error) {

            console.log(error)

        }
        
    } 

    //yukarıda oluşturulan createUsers fonksiyonu context olarak paylaşılır.
    const values={createUsers}

  return (

    <AutContext.Provider value={values}>
        {children}
    </AutContext.Provider>

  )
}
