import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME} from "../actions/names"
const initialState = {
    countriesLoaded: undefined,

};

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            console.log('hola',action.payload.rows)
            return {
                ...state,
                ///AAAAAAAAAAAAAAAA
                countriesLoaded: action.payload.rows
            }
        default:
            return state;
    }
}

export default rootReducer;