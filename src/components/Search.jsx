import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Search() {
    const [search, setSearch] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
   
    async function onSearch(event) {
        if(event.key === "Enter"){
            console.log("thisclicked")
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTitle}&limit=10`)
            setSearch(data.data)
            console.log(data)
        }
       
    }
 
 return (
    
    <div className='search__container'>
        <input className='search__input' 
        type="text" placeholder="Search..." 
        onChange={(event) => setSearchTitle(event.target.value)} 
        onKeyDown={onSearch}/>
        
         <div className='search__results'>
        {search.map(searching => (
            <div className='upcoming__card' key={searching.id}>
                <img className='upcoming__img' src={searching.images.jpg.large_image_url} alt={searching.title} />
                <h1 className='upcoming__title'>{searching.title}</h1>
            </div>
        ))}
    </div>
        </div >
);
}

export default Search;

