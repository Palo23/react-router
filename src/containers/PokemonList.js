import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { getPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    useEffect(() => {
      getData(1);
    }, [])

    const getData = (page = 1) => {
        dispatch(getPokemonList(page));
    }
    

    const ShowData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return pokemonList.data.map(pokemon => {
                return <div key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    <Link to={`/pokemon/${pokemon.name}`}>View</Link>
                </div>
            });
        }

        if (pokemonList.loading) {
            return <p>Loading</p>
        }

        if (pokemonList.errorMsg !== '') {
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p>unable to get data</p>
    };

    return(
        <div>
            {ShowData()}
        </div>
    )

}

export default PokemonList;