import React from 'react'
import axios from 'axios'
import useInput from '../Hooks/useInput'
import { useContext, useState, useRef } from 'react';
import { AuthContext } from '../Hooks/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/newUser.scss'


const LogUser = () => {
    const email = useInput()
    const password = useInput()
    const navegate = useNavigate()
    const auth = useContext(AuthContext);
    const captcha = useRef(null)

    const [captchaValue, setCaptchValue] = useState(null)

    const onChange = () => {
        console.log('El usuario no es un robot')
        console.log(captcha.current)
        console.log(captcha.current.getValue())

        if (captcha.current.getValue()) {
            setCaptchValue(true)
        }

    }

    const handlerSubmit = (e) => {
        e.preventDefault()

        /* Condicional con axios  */
        if (captcha.current.getValue()) {
            setCaptchValue(true)

            axios.post('http://localhost:3001/api/user/login', { email: email.value, password: password.value })
                .then((user) => {
                    localStorage.setItem('user', JSON.stringify(user.data))
                    auth.toggleAuth(user.data.name)
                })
                .then(() => navegate('/'))
                .catch(() => prompt('Contraseña y/o email incorrectos'))

        }

        /* En caso de que sea un bot no nos deja loguear */

    }



    return (
        <body>
            <div className="form" >
                <form onSubmit={handlerSubmit} >
                    <h1 class='title-register-login'>Iniciar sesion</h1>

                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="email" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@email.com' {...email} />

                    <label for="exampleInputPassword1" class="form-label"></label>
                    <input type="password" class="form-control input" id="exampleInputPassword1" placeholder='password' {...password} />

                    <div className='reCaptcha'>
                        {/* 6LfkG0UgAAAAAJEJyV4akUpzFhAdPJNcSX7Ynmig */}
                        <ReCAPTCHA
                            sitekey="6LeTM08gAAAAAFgWqBOdgL5yHKEd2z-fDQ_MSpjw"
                            onChange={onChange}
                            ref={captcha}
                        />

                    </div>

                    <div>
                        {/* condiocional y mensaje */}
                        {captchaValue === false && <p className='mensaje'>Por favor hace click en el checkbox</p>}
                    </div>



                    <button type="submit" class="btn btn-danger input btn-form">Iniciar sesion</button>
                    <br />
                    <Link class="btn-from" to={'/register'}>
                        <button type="submit" class="btn btn-danger input btn-form btn-register">Registrarse</button>
                    </Link>
                </form >
            </div >
        </body>

    )

}

export default LogUser;