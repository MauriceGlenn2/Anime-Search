import React, {useEffect, useState} from 'react'
import axios from 'axios'

//https://api.jikan.moe/v4/top/anime
function Trending() {
const [trending, setTrending] = useState([])

useEffect(() => {
  async function fetchTrending(upcoming) {
    const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=${upcoming}&limit=10`)
    console.log(data)
    setTrending(data.data)
  }
  const filterType = "upcoming";
  fetchTrending(filterType)
}, [])

  return (
    <>
      <h1 className='upcoming__heading'>Coming Soon</h1>
    <div className='upcoming__container'>
      {trending && trending.length > 0 ? (
        trending.map((trend) => (
          <div className='upcoming__card' key={trend.mal_id}>
          <img className='upcoming__img' src={trend.images.jpg.large_image_url} alt="" />
          <h1  className='upcoming__title'>
            {trend.title_english}
          </h1>
          </div>
        ))
      ) : (
        <h1 className='white'>No trending anime found</h1>
      )}
    </div>
    </>
  );

}

export default Trending