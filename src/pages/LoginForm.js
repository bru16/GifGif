import React from 'react'
import Form from '../components/Register/Form'
import useUser from '../hooks/useUser'
import { Helmet } from "react-helmet-async";

const LoginForm = () => {
    const { login, error } = useUser();

    return (
        <>
            <Helmet><title>GifGif | Login</title></Helmet>
            <h2>Login</h2>
            <Form onSubmit={login} />
            {error && <h4 style={{ color: '#bf1650' }}>Credentials do not match.</h4>}

        </>
    )
}

export default LoginForm