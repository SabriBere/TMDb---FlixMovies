import React, { useEffect, useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import axios from 'axios'
import '../styles/peliculas.scss'


const MyFavorites = () => {

    const user_id = JSON.parse(localStorage.getItem("user")).id
    const [favorites, setFavorites] = useState([])
    const [remFav, setRemFav] = useState({})

    const handlerCLickRemove = (favorites) => {
        axios.delete(`http://localhost:3001/api/favorites/remove/${user_id}/${favorites.code}`
        )
            .then((data) => console.log(data))
            .then((remFav) => setRemFav(remFav))
        window.location.reload()
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/favorites/${user_id}`)
            .then(res => res.data)
            .then((favorites) => setFavorites(favorites))


    }, [])

    return (

        <div >
            {/* Agregar botón para eliminar de favoritos */}
            {/* Muetra la imagen y si haces click te muetra más info */}
            <h1 class='titles-estrenos'>Mis favoritos</h1>

            <div className="movie-grid">
                {favorites.length >= 1 ?
                    favorites.map((fav, i) => {
                        return (
                            <div >
                                <a onClick={() => { handlerCLickRemove(fav) }} class="btn btn-danger pop-fav"><MdOutlineFavoriteBorder /></a>
                                <img class='pop-img' key={i} src={`https://image.tmdb.org/t/p/w200/${fav.imagen}`} />
                                <p class='pop-title'>{fav.title}</p>
                            </div>
                        )
                    }) : <h4 class='pop-title'>Aun no tenes favoritos</h4>
                }
            </div>
        </div >
    )

}

{/* <>{(favoritos)
    ?favoritos.map(favorito => handleFavorit(favorito))
    :"You don't have favorites films"}
    </> */}

export default MyFavorites;