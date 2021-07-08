import React from 'react'
import Form from '../components/Register/Form'
import useUser from '../hooks/useUser'

const RegisterForm = () => {
    const { registerUser, error } = useUser();

    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={registerUser} />
            {error && <h4 style={{ color: '#bf1650' }}>Username already taken, try again.</h4>}
        </div>
    )
}

export default RegisterForm
