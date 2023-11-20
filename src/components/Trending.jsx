import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//https://api.jikan.moe/v4/top/anime
function Trending() {
const [trending, setTrending] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
  async function fetchTrending(upcoming) {
    const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=${upcoming}&limit=10`)
    console.log(data)
    setTrending(data.data)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  const filterType = "upcoming";
  fetchTrending(filterType)
}, [])

  return (
    <>
      <h1 className='upcoming__heading'>Coming Soon</h1>
      <div className='upcoming__container'>
        {loading ? (
          new Array(10).fill(0).map((_, index) => (
            <div className='loading__card' key={index}>
              <div className='loading__img' />
              <p className='loading__title' />
              <p className='loading__title' />
            </div>
          ))
        ) : (
          trending.map((trend) => (
            <Link to={`/AnimeInfo/${trend.mal_id}`}><div className='upcoming__card' key={trend.mal_id}>
              <img className='upcoming__img' src={trend.images.jpg.large_image_url} alt="" />
              <h1 className='upcoming__title'>
                {trend.title_english}
              </h1>
            </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
          }

export default Trending