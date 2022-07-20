import React, { useState, useEffect } from 'react'
import { AiFillPlayCircle, AiFillInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/peliculas.scss'
import Peliculas from './Peliculas'


const Header = () => {

    const [seccionMovie, setSeccionMovie] = useState([])
    const token = '5a2cd889e715aa8e13b5764264b5166c'

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${token}`)
            .then((seccionMovie) => setSeccionMovie(seccionMovie.data.results))

    }, [])

    return (
        <div>

            <div class="pelicula-principal">
                <div class="contenedor">
                    <h3 class="titulo">Interestellar</h3>
                    <p class="descripcion">
                        Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.
                    </p>
                    <button role="button" class="boton"><i><AiFillPlayCircle /></i>Reproducir</button>
                    <button role="button" class="boton"><i><AiFillInfoCircle /></i>Más información</button>
                </div>
            </div>

            {/* <Link class='catalogo' to={'/home'}> */}
            <Peliculas />
            {/* </Link> */}

        </div>
    )
}

export default Header;

/* 
    const [movie, setMovie] = useState({})
    const token = '5a2cd889e715aa8e13b5764264b5166'

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${token}`)
            .then((res) => res.data)
            .then((movie) => setMovie(movie))
    }) */