const DefaultState = {
    loading: false,
    data: [],
    errorMsg: '',
    count: 0,
};

const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'POKEMON_LIST_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg: '',
            }
            break;
        case 'POKEMON_LIST_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: 'Unable to get Pokemon'
            }
            break;
        case 'POKEMON_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: '',
                count: action.payload.count,
            }
            break;
    
        default:
            return state
            break;
    }
};

export default PokemonListReducer;