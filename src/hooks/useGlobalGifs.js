import { useContext } from 'react'
import GifsContext from '../context/GifsContext'

const useGlobalGifs = () => {
    const { gifs, setGifs } = useContext(GifsContext);
    return { gifs, setGifs };
}

export default useGlobalGifs
