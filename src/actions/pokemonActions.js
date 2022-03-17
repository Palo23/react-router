import axios from "axios"

export const getPokemonList = (page) => async dispatch => {
    try {
        const perPage = 15;
        const offset = page * perPage;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);
    } catch (error) {
        
    }
}