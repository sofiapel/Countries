import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID} from "../actions/names"
const initialState = {
    countriesLoaded: undefined,
    //countriesByName: undefined,
    countryById: undefined

};

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_COUNTRY_BY_ID:
            //funciona :D
            return {
                ...state,
                countryById: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            //funciona :D
            console.log('aaa', action.payload)
            return {
                ...state,
                countriesLoaded: action.payload
            }
        case GET_COUNTRIES:
            console.log('holaa',action.payload)
            return {
                ...state,
                ///AAAAAAAAAAAAAAAA
                countriesLoaded: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;