import react from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import '../styles/peliculas.scss'

const Peliculas = () => {
    const [seccionMovie, setSeccionMovie] = useState([])
    const [addFav, setAddfav] = useState({})
    const token = '5a2cd889e715aa8e13b5764264b5166c'
    /* const user_id = JSON.parse(localStorage.getItem("user")).id
    console.log(user_id) */

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${token}`)
            .then((seccionMovie) => setSeccionMovie(seccionMovie.data.results))

    }, [])




    const handlerCLickAdd = (movie) => {
        console.log(movie)
        axios.put('http://localhost:3001/api/favorites/add', { code: movie.id, title: movie.title, overview: movie.overview, imagen: movie.poster_path, /* userId: user_id */ })


    }

    /* Hacer un onClick para que muestre más info de la pelicula */

    return (
        <div>
            <h1 class='titles-estrenos'>Peliculas populares</h1>

            <div className="movie-grid">
                {
                    seccionMovie.map((sec, i) => {
                        return (
                            <div key={i}>
                                {/* Hacer un ternario con los botones */}

                                <bottom onClick={() => handlerCLickAdd(sec)} class="btn btn-danger pop-fav"><MdFavorite /></bottom>
                                <img class='pop-img' src={`https://image.tmdb.org/t/p/w200/${sec.poster_path}`} />
                                <p class='pop-title'>{sec.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Peliculas;

/* `https://api.themoviedb.org/3/discover/movie?api_key=${token}` Para el header */