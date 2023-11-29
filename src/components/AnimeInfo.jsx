import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function AnimeInfo() {
  const { id } = useParams();
  console.log("ID:", id);
  const [animeData, setAnimeData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAnimeInfo() {
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      setAnimeData(data)
      setLoading(false)
    }

    if (id) {
      setTimeout(() => {
        fetchAnimeInfo()
      }, 3000);
      
    }

  }, [id])
  

  return (
    <div className='info__container'>

      {loading ? (<div className='info__wrapper'>
        <div className='loading__info--img'></div>
        <div className='details__wrapper'>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
          <div className='loading__info--para'></div>
        </div>
      </div>) : animeData ? (
        <div className='info__wrapper'>
          <div className='img__wrapper'><img className='info__img' src={animeData.data.images.jpg.large_image_url} alt="" /></div> 
          <div className='details__wrapper'>
            <h1 className='info__title'>{animeData.data.title_english}</h1>
            <h1 className='info__rating'>Rating: {animeData.data.rating}</h1>
            <h1 className='info__aired'>Airing Status: {animeData.data.status}</h1>
            <p className='info__para'>Synopsis: {animeData.data.synopsis}</p>
            <p className='more__info--link'> More Information: <a href={animeData.data.url} target='_blank'>{animeData.data.url}</a></p>
            <Link to={`/`}> <span className='back__btn try__btn--link '>Back</span></Link>
          </div>
        </div>
        ) : (
            <div className='info__title'>Error: No data</div>
        )

      }


    </div>
  )
}

export default AnimeInfo