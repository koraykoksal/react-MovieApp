import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const DataContext=createContext();

export const DataContextPrivoder=({children})=>{


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODViNTg1MWUyZDc4OTkzODJlZjljNmQ3YzExODM5MSIsInN1YiI6IjY0YzRlYmQ4NjNhYWQyMDIwOWE0YjcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.logjeDbEHNm6IHTMBQboM45-rFZyNR2ULUxi5M9mTvQ'
        }
      };

    const [data, setdata] = useState([])

    const getData=async()=>{
        
        try {

            let res = await axios('https://api.themoviedb.org/3/discover/movie',options)

        if(res.status == '200'){
            
            setdata(res.data.results)
        }
        } catch (error) {

            console.log(error)

        }
        
    }

    const values={data,setdata,getData}

    return(

        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    )

}
