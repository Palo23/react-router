import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getPokemon } from "../actions/pokemonActions";
import _ from 'lodash';

const Pokemon = (props) => {
    let { pokemon } = useParams();
    
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);

    useEffect(() => {
        dispatch(getPokemon(pokemon))
    }, []);

    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemon])) {
            const pokeData = pokemonState.data[pokemon];
            return(
                <div className="pokemon-wrapper">
                    <div className="item">
                        <h1>Sprites</h1>
                        <img src={pokeData.sprites.front_default} alt="" />
                        <img src={pokeData.sprites.back_default} alt="" />
                        <img src={pokeData.sprites.front_shiny} alt="" />
                        <img src={pokeData.sprites.back_shiny} alt="" />
                    </div>
                    <div className="item">
                        <h1>Stats</h1>
                        {pokeData.stats.map(stat => {
                            return(
                                <p key={stat.stat.name}>{stat.stat.name} {stat.base_stat}</p>
                            )
                        })}
                    </div>
                    <div className="item">
                        <h1>Abilities</h1>
                        {pokeData.abilities.map(ability => {
                            return(
                                <p key={ability.ability.name}>{ability.ability.name}</p>
                            )
                        })}
                    </div>
                </div>    
            )
        }

        if (pokemonState.loading) {
            return <p>loading</p>
        }

        if (pokemonState.errorMsg !== '') {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>error getting pokemon</p>
    }

    return(
        <div className="poke">
            <h1>{pokemon}</h1>
            <div>{ShowData()}</div>
        </div>
    )
}

export default Pokemon;