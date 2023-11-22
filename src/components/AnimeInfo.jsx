import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function AnimeInfo() {
 const { id } = useParams();
 const [animeData, setAnimeData] = useState(null)

useEffect(() => {
  async function fetchAnimeInfo() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
    console.log(data)
    setAnimeData(data)
  }

  if (id) {
    fetchAnimeInfo();
  }
  

}, [id])


  return (
    <div className='info__container'>
       <h1 className='animeInfo'>test:{animeData ? animeData.mal_id : "Loading...."}</h1>
      
      </div>
  )
}

export default AnimeInfo