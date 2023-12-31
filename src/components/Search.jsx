import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Search() {
    AOS.init({ duration: 2000 });
    const [search, setSearch] = useState([])
    const [searchTitle, setSearchTitle] = useState('')
    const [loading, setLoading] = useState(true)

    async function onSearch(event) {
       
        if (event.key === "Enter") {
            setLoading(true)
            console.log("thisclicked")
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTitle}&limit=10`)
            setSearch(data.data)
            console.log(data)
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    }
    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <Element name="search">
            <div className='search__container'>
                <input
                    className='search__input'
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => setSearchTitle(event.target.value)}
                    onKeyDown={onSearch}
                />
                <div className='search__results' data-aos="fade-left">
                    {loading ? (
                        new Array(10).fill(0).map((_, index) => (
                            <div className='loading__card' key={index}>
                                <div className='loading__img' />
                                <p className='loading__title' />
                                <p className='loading__title' />
                            </div>
                        ))
                    ) : (
                        search.length === 0 ? (
                            <div>Null</div>
                        ) : (
                            search.map((searching) => (
                                <Link to={`/AnimeInfo/${searching.mal_id}`}>
                                    <div className='upcoming__card' key={searching.id}>
                                        <img
                                            className='upcoming__img'
                                            src={searching.images.jpg.large_image_url}
                                            alt={searching.title}
                                        />
                                        <h1 className='upcoming__title'>{searching.title}</h1>
                                    </div>
                                </Link>
                            ))
                        )
                    )}
                </div>
            </div>
        </Element>
    );
}

export default Search;

