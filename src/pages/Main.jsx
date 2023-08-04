import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";
import {FaLanguage} from 'react-icons/fa'
import {HiTrendingUp} from 'react-icons/hi'
import {MdDateRange} from 'react-icons/md'
import {BiUpvote} from 'react-icons/bi'
import { toastWarnNotify } from "../helpers/TostNotify";
import { AutContext, AuthContext } from "../context/AuthContext";
import {MovieCard} from "../components/MovieCard";
import {FiSearch} from 'react-icons/fi'

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  const {data,getData,loading}=useContext(DataContext)
  const [searchTerm, setSearchTerm] = useState("");
  const { currentuser } = useContext(AutContext);

  console.log(searchTerm)

  const handleSubmit = (e) => {

    e.preventDefault();

    if (currentuser && searchTerm) {
      getData(SEARCH_API + searchTerm);
    } else if (!currentuser) {
      toastWarnNotify("Please log in to search movies");
    } else {
      toastWarnNotify("please enter a text");
    }

  };

  


return(

  
  <>
  <form onSubmit={handleSubmit} className="flex justify-center p-5 mt-5 items-center">
    <input
      type="search"
      className="w-80 h-8 rounded-sm p-1 m-2 "
      placeholder="Search a movie..."
      onChange={(e) => setSearchTerm(e.target.value)}
      
    />
    <button className="btn-danger-bordered">Search</button>
    {/* <FiSearch size={'25px'} color="white" className="hover:cursor-pointer"/> */}
  </form>
  <div className="flex justify-center flex-wrap">
    {loading ? (
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      data.map((movie) => <MovieCard key={movie.id} {...movie} />)
    )}
  </div>
</>

 
  // <div className="flex flex-wrap gap-3 justify-center items-center m-10">

  //   <form className="flex justify-center p-2">
  //           <input
  //             type="search"
  //             className="w-80 h-8 rounded-md p-1 m-2"
  //             placeholder="Search a movie..."
            
  //           />
  //           <button className="btn-danger-bordered">Search</button>
  //         </form>

  // {
  //   data.map((item,i)=>(

      
  //       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[400px] w-[380px] hover:scale-95 hover:border-spacing-3 hover:rounded-md hover:dark:bg-slate-700 hover:cursor-pointer" key={i}>

  //         <div>
  //         <img className="rounded-t-lg" src={item?.poster_path} alt="" />
  //         </div>
          

  //         <div className="p-3">
              
  //           <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5>

  //         </div>



  //         <div className="p-3 flex justify-start gap-2 items-center">
  //         <div className="flex justify-start items-center gap-2">
  //         <BiUpvote className="text-white" size={'30px'}/><p className="font-normal text-lg text-gray-700 dark:text-gray-400">{item?.vote_average}</p> 
  //         </div>
  //         </div>


  //     </div>
     
      


  //   ))
  // }
  // </div>
 
)
};

export default Main;
