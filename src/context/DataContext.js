import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export const DataContext=createContext();

const API_KEY=process.env.REACT_APP_TMDB_KEY
const reqAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`


export const DataContextPrivoder=({children})=>{


    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
      
        getData(reqAPI);
    

    }, [])
    
    const getData=async(API)=>{
        setloading(true)
        axios(API)
        .then((res)=>setdata(res.data.results))
        .catch((err)=>console.log(err))
        .finally(setloading(false))

        
    }

    console.log("dataaa : ",data)


    const values={data,setdata,getData,loading}

    return(

        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    )

}
