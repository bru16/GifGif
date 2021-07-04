import { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import * as authService from '../services/auth'
import * as userService from '../services/user'

const useUser = () => {
    const { jwt, setJWT, favs, setFavs } = useContext(Context);

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

    const addFavorite = async (id) => {
        try {
            const favorites = await userService.addFav({ id, jwt });
            setFavs(favorites);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFavorite = async (id) => {
        try {
            const favorites = await userService.deleteFav({ id, jwt });
            setFavs(favorites);
        } catch (error) {
            console.log(error)
        }
    }

    return {
        login,
        logout,
        addFavorite,
        deleteFavorite,
        favs,
        isLogged: Boolean(jwt),
    }
}

export default useUser
