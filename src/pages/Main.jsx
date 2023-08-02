import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";
import {FaLanguage} from 'react-icons/fa'
import {HiTrendingUp} from 'react-icons/hi'
import {MdDateRange} from 'react-icons/md'
import {BiUpvote} from 'react-icons/bi'



const Main = () => {

  const {data,getData}=useContext(DataContext)

  const {title} = data;

  useEffect(() => {
    
    getData()

  }, [])
  
  console.log(data)


return(

 
  <div className="flex flex-wrap gap-3 justify-center items-center m-10">

  {
    data.map((item,i)=>(

      
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[400px] w-[400px] hover:scale-95 hover:border-spacing-3 hover:rounded-md" key={i}>

          <div>
          <img className="rounded-t-lg" src={item?.poster_path} alt="" />
          </div>
          

          <div className="p-3">
              
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5>

          </div>


          <div className="p-3 flex justify-start gap-2 items-center">

          <div className="flex justify-start items-center gap-2">
          <FaLanguage className="text-white" size={'40px'}/><p className="font-normal text-lg text-gray-700 dark:text-gray-400">{item?.original_language}</p> 
          </div>
          
          </div>

          <div className="p-3 flex justify-start gap-2 items-center">
          <div className="flex justify-start items-center gap-2">
          <HiTrendingUp className="text-white" size={'40px'}/><p className="font-normal text-lg text-gray-700 dark:text-gray-400">{item?.popularity}</p> 
          </div>
          </div>

          <div className="p-3 flex justify-start gap-2 items-center">
          <div className="flex justify-start items-center gap-2">
          <MdDateRange className="text-white" size={'40px'}/><p className="font-normal text-lg text-gray-700 dark:text-gray-400">{item?.release_date}</p> 
          </div>
          </div>

          <div className="p-3 flex justify-start gap-2 items-center">
          <div className="flex justify-start items-center gap-2">
          <BiUpvote className="text-white" size={'40px'}/><p className="font-normal text-lg text-gray-700 dark:text-gray-400">{item?.vote_average}</p> 
          </div>
          </div>


      </div>
     
      


    ))
  }
  </div>
 
)
};

export default Main;
