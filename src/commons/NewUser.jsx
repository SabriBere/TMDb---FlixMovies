import React from 'react'
import axios from 'axios'
import useInput from '../Hooks/useInput'
import { useNavigate } from 'react-router-dom'
import '../styles/newUser.scss'


const NewUser = () => {
    //fatarían validaciones para los coampos del formulario
    const navigate = useNavigate()
    const name = useInput()
    const email = useInput()
    const password = useInput()

    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/user/register', { name: name.value, email: email.value, password: password.value })

            .then(info => {
                if (info.data == "Usuario ya existente") {
                    alert(info.data)
                    window.location.reload()
                }
                /*  else {
                     navigate("/login")
                 } */
            })
            .catch((error) => console.log(error))
        navigate('/login')
    }

    return (
        <body className="body">

            <form className="form" onSubmit={handlerSubmit}>
                <h1 class='title-register-login'>Registrar en FlixMovies</h1>
                <div class="mb-3">
                    <label class="form-label"></label>
                    <input class="form-control input" placeholder='User name' {...name} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label "></label>
                    <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@email.com' {...email} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"></label>
                    <input type="password" class="form-control input" id="exampleInputPassword1" placeholder='password' {...password} />
                </div>
                <button type="submit" class="btn btn-danger input btn-form btn-register">Registrarse</button>
            </form>
        </body>
    )
}


export default NewUser;