import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [id, setId] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', login.email)
        formData.append('password', login.password)

        axios.post('http://localhost/PHP/AdminPanel/insert.php', login)
            .then(function (response) {
                console.log(response);
                // setId(response.data.id)
                // alert("ID == " + response.data.id)

                if ((response.data.email == login.email) && (response.data.password == login.password)) {
                    alert('Your data is currected...!')
                    window.localStorage.setItem('id', response.data.id)
                    window.location.href = '/home'
                }
                else {
                    alert('Please, Check your data...!')
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const formInfo = (i) => {
        let targetName, targetValue
        targetName = i.target.name
        targetValue = i.target.value

        setLogin({ ...login, [targetName]: targetValue })
    }
    return (
        <>
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form action="" method="post" onSubmit={formSubmit} >
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" name='email' placeholder="Email" onChange={formInfo} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" name='password' placeholder="Password" onChange={formInfo} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </a>
                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">Register a new membership</a>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
