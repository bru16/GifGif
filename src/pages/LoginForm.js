import React, { useState, useEffect } from 'react'
import useUser from '../hooks/useUser';
import { useLocation } from 'wouter'

const LoginForm = () => {
    const { login, isLogged } = useUser();
    const [, pushLocation] = useLocation();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(() => {
        if (isLogged) pushLocation('/')
    }, [isLogged, pushLocation]);

    const handleSubmit = e => {
        e.preventDefault();
        login({ username, password });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm