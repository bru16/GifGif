import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import * as authService from '../services/auth'

const useUser = () => {
    const { jwt, setJWT } = useContext(Context);

    const login = useCallback(async ({ username, password }) => {
        try {
            const token = await authService.login({ username, password });
            setJWT(token);
            sessionStorage.setItem('jwt', token);
        } catch (error) {
            console.log(error.message)
        }
    }, [setJWT]);

    const logout = useCallback(() => {
        setJWT(null);
        sessionStorage.clear();
    }, [setJWT]);

    return {
        login,
        logout,
        isLogged: Boolean(jwt)
    }
}

export default useUser
