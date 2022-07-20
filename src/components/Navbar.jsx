import React from 'react'
import axios from 'axios'
import { BsSearch, BsPersonFill, BsPerson } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../Hooks/AuthContext';
import '../styles/navbar.scss'


const Navbar = () => {
   const { isAuthenticated, user, toggleAuth } = useContext(AuthContext)
   const navegate = useNavigate()
   const [value, setValue] = useState('')

   const handlerClick = (e) => {
      setValue(e.target.value)
   }
   const handlerSubmit = (e) => {
      e.preventDefault()
      navegate(`/search/${value}`)
   }

   const handlerClickLogOut = () => {
      toggleAuth()
      axios.post('http://localhost:3001/api/user/logout')
         .then((user) => localStorage.removeItem('user', JSON.stringify(user.data)))
         .then(() => navegate('/'))
   }


   return (

      <header class="logotipo">
         <nav class="navbar navbar-expand-lg " /* navbar-dark bg-dark */>
            <div class="container-fluid">
               <Link to={"/"} class="activo"><h2 class="logotipo itermitente">FlixMovies</h2></Link>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                        <Link to={'/movies'} >Peliculas</Link>
                        {/* Hacer un dropdown que permita elegir qué buscar */}
                        {/* En un futuro permita buscar series por genero */}
                     </li>
                     <li class="nav-item">
                        <Link to={'/series'} >Series</Link>
                        {/* En un futuro permita buscar series por genero */}
                     </li>
                     <li class="nav-item">
                        <Link to={'/favorites'}>Mi lista</Link>
                     </li>
                     <li class="nav-item">
                        <Link to={'/search/users'}>Buscar flixeros</Link>
                     </li>
                  </ul>

                  {/* Botones de buscar, loguar, saludo */}

                  <form class="d-flex" role="search" onSubmit={handlerSubmit}>
                     <input onChange={handlerClick} class="form-control me-2 input" type="search" placeholder="Search..." aria-label="Search" />
                     <div class="btn-group-3 ">
                        <Link to={'/search'}>
                           <button type="button" class="btn btn-danger btn-search"><BsSearch /></button>
                        </Link>
                     </div>
                  </form>

                  <div class="btn-group-3 ">
                     {isAuthenticated ? <Link to={'/'}>
                        <button onClick={handlerClickLogOut} type="button" class="btn btn-danger btn-search"><BsPersonFill /></button>
                     </Link> :
                        <Link to={'/login'}>
                           <button type="button" class="btn btn-danger btn-search "><BsPerson /></button>
                        </Link>}
                  </div>

                  <h6 class="title-navbar">{isAuthenticated ? <div>{user}</div> : 'Te encontras deslogueado'}</h6>

               </div>
            </div>
         </nav >
      </header >
   )
}


export default Navbar;