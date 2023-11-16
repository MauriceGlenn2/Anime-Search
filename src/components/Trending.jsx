import React, {useEffect, useState} from 'react'
import axios from 'axios'

//https://api.jikan.moe/v4/top/anime
function Trending() {
const [trending, setTrending] = useState([])

useEffect(() => {
  async function fetchTrending() {
    const { data } = await axios.get('https://api.jikan.moe/v4/top/anime')
    console.log(data)
    setTrending(data.top || [])
  }
  fetchTrending()
}, [])

  return (
    <div className=''>
      {
        trending.map(trend => <h1 className='white'>{trend.episodes}</h1>)
      }

      <h1 className='white'>
      text
      </h1>
    </div>
   
  )
}

export default Trending