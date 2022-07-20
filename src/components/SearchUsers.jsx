import react from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../styles/SearchUsers.scss'
import ContentOtherUsers from './ContentOtherUsers'


const SearchUsers = () => {
    const [searchUser, setSearchUser] = useState([])
    const [value, setValue] = useState('')
    const user_id = JSON.parse(localStorage.getItem("user")).id

    const handlerClick = (e) => {
        setValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        //buscar a una persona
        e.preventDefault()
        axios.get(`http://localhost:3000/api/user/${value}/${user_id}`)

            .then((searchUser) => setSearchUser(searchUser.data));
    }

    
    /* Falta mostrar los resultados de las pelis favoritas de x usuario*/
    return (
        <div>
            <h2 class='title-search-users'>Busca otros flixperos</h2>
            <form class="d-flex form" role="search" onSubmit={handlerSubmit}>

                <label class="form-label"></label>
                <input onChange={handlerClick} type="search" class="form-control input" id="exampleInputPassword1" placeholder="Search..." />
                <br />
                <div>
                    <button type="submit" class="btn btn-danger input btn-form">Buscar</button>
                </div>
            </form >

            <div>
                <ContentOtherUsers searchUser={searchUser} />
            </div>
        </div >
    )

}

export default SearchUsers 