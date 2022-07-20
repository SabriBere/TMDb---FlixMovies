import React from 'react'
import "./index.css";
import NewUser from './commons/NewUser';
import LogUser from './commons/LogUser';
import Navbar from './components/Navbar'
import Header from './components/Header';
import MyFavorites from './components/MyFavorites';
import Peliculas from './components/Peliculas'
import Series from './components/Series'
import SearchUsers from './components/SearchUsers'
import Content from './components/Content'
/* import SingleMovie from './components/SingleMovie' */
import { AuthContextProvider } from './Hooks/AuthContext'
import { Routes, Route } from 'react-router-dom'



const App = () => {

    return (
        <div>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/search/:value' element={<Content />} />
                    <Route path='/register' element={<NewUser />} />
                    <Route path='/login' element={<LogUser />} />
                    <Route path='/favorites' element={<MyFavorites />} />
                    <Route path='/movies' element={<Peliculas />} />
                    {/* Para mostrar peliculas de forma individual */}
                    {/* <Route path='/movies/:select' element={<SingleMovie />} /> */}
                    <Route path='/series' element={<Series />} />
                    <Route path='search/users' element={< SearchUsers/>} />
                </Routes>
            </AuthContextProvider>
        </div>
    )

}

export default App;