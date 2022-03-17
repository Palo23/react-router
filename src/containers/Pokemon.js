import React from "react";
import { useParams } from 'react-router-dom';

const Pokemon = (props) => {
    let { pokemon } = useParams();
    console.log(pokemon);

    return(
        <div>Pokemon</div>
    )
}

export default Pokemon;