import React from 'react'
import { MdFavorite } from 'react-icons/md'
import axios from 'axios'
import '../styles/peliculas.scss'

const ContentOtherUsers = ({ searchUser }) => {

    const user_id = JSON.parse(localStorage.getItem("user")).id

    const handlerCLickAdd = (movie) => {
        console.log(movie)
        axios.put('http://localhost:3001/api/favorites/add', { code: movie.id, title: movie.title, overview: movie.overview, imagen: movie.poster_path, userId: user_id })

    }



    return (
        <div>
            <h1 class='titles-estrenos'>Favoritos de otros users</h1>

            <div className="movie-grid">
                {
                    searchUser.map((search, i) => {
                        return (
                            <div key={i}>

                                <bottom onClick={() => { handlerCLickAdd(search) }} class="btn btn-danger pop-fav"><MdFavorite /></bottom>
                                {(search.imagen !== null) ? <img class='pop-img' src={`https://image.tmdb.org/t/p/w200/${search.imagen}`} /> : null}
                                <p class='pop-title'>{search.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContentOtherUsers;