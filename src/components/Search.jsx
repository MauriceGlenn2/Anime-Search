import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Search() {
    const [search, setSearch] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
    // const[loading, setLoading] = useState(false)

    function onSearch() {
        getResults(searchTitle)
    }

    async function getResults(search) {
        const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`)
        setSearch(data.data)
        
        console.log(data)
    }






    useEffect(() => {
        getResults()

    }, [])
 

    return (
        <div className='search__container'>
                <input className='search__input' type="text" placeholder="Search..."  />
                <button className='search__button' type="submit">Search</button>
            {search.map(searching => (
                <div className='upcoming__card' key={searching.id}>
                    <img className='upcoming__img' src={searching.imageUrl} alt={searching.title} />
                    <h1 className='upcoming__title'>{searching.title}</h1>
                </div>
            ))}
        </div>
    );
            }
export default Search;

