import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { getPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ReactPaginate from "react-paginate";

const PokemonList = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
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
            return(
                <div className="list-wrapper">
                    {pokemonList.data.map(pokemon => {
                        return(
                            <div className={"pokemon-item"} key={pokemon.name}>
                            <p>{pokemon.name}</p>
                            <Link to={`/pokemon/${pokemon.name}`}>View</Link>
                        </div>
                        )
                    })}
                </div>
            )
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
            <div className="search-wrapper">
                <p>Search:</p>
                <input type="text" onChange={e => setSearch(e.target.value.toLowerCase())}/>
                <button onClick={() => navigate(`/pokemon/${search}`)}>Search</button>
            </div>
            {ShowData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate 
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => getData(data.selected + 1)}
                    containerClassName='pagination'
                />
            )}
        </div>
    )

}

export default PokemonList;