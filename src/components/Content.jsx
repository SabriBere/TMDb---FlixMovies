import React from 'react'
import axios from 'axios'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import peliculas from '../styles/peliculas.scss'



const Content = () => {
    //Si no está logeado no puede buscar

    const token = '5a2cd889e715aa8e13b5764264b5166'
    const { value } = useParams()
    const user_id = JSON.parse(localStorage.getItem("user")).id
    const [addFav, setAddfav] = useState({})
    const [search, setSearch] = useState([])



    const handlerCLickAdd = (movie) => {
        console.log(movie)
        axios.put('http://localhost:3001/api/favorites/add', { code: movie.id, title: movie.title, overview: movie.overview, imagen: movie.poster_path, userId: user_id })

    }

    const handlerCLickRemove = (movie) => {
        axios.delete(`http://localhost:3001/api/favorites/remove/${user_id}/${movie.id}`
        )
            .then((res) => res.data)
            .then((addfav) => setAddfav(addfav))
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${token}c&query=${value}`)
            .then((res) => res.data)
            .then((search) => setSearch(search.results))
    }, [])



    return (
        <div>
            <h1 class='titles-estrenos'>Resultados</h1>
            <div className="movie-grid" >
                {
                    search.map((movie, i) => {
                        return (
                            <div key={i}>


                                <a onClick={() => { handlerCLickRemove(movie) }} class="btn btn-danger pop-fav"><MdOutlineFavoriteBorder /></a>
                                <br />
                                <br />

                                <a onClick={() => { handlerCLickAdd(movie) }} class="btn btn-danger pop-fav"><MdFavorite /> </a>

                                {(movie.poster_path !== null) ? <img class='pop-img' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} /> :
                                    <div class='noContent'>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <p class='pop-title'>Imagen no disponible</p>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>}

                                <p class='pop-title'>{movie.title}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Content;
