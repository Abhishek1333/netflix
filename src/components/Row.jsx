import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import instance from '../instance';
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
  const [allmovies,setAllmovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
  
    /* console.log(fetchUrl); */
    const fetchData=async()=>{
      const {data}=await instance.get(fetchUrl)
      /* console.log(data.results); */
      setAllmovies(data.results)
    }
    console.log(allmovies);

    useEffect(() => {
     fetchData()
    }, []);
  return (
    <div>
        <h1>{title}</h1>
        <div className="movie_row">
          {
            allmovies?.map(item=>(
              <img class={`movies ${isPoster && 'movie_poster'}`} src={`${base_url}/${isPoster?item?.poster_path:item?.backdrop_path}`} alt="no image"/>
            ))
          }
        </div>
    </div>
  )
}

export default Row