import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, ORDER_ASC, ORDER_DSC,ORDER_POP, ORDER_CONTINENT, GET_ACTIVITIES } from "../actions/names"
const initialState = {
    //allCountries:[],
    countriesLoaded: [],
    countryById: undefined,
    activities: []
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_ACTIVITIES:
            return {
                ...state,
                countriesLoaded: action.payload
            }
        case GET_COUNTRY_BY_ID:
            //funciona :D
            return {
                ...state,
                countryById: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            //funciona :D
            //console.log('aaa', action.payload)
            return {
                ...state,
                //countriesByName: action.payload,
                countriesLoaded: action.payload
            }
        case GET_COUNTRIES:
            //console.log('holaa',action.payload)
            return {
                ...state,
                ///AAAAAAAAAAAAAAAA
                allCountries: action.payload,
                countriesLoaded: action.payload,
            }
        case ORDER_ASC:
            return {
                ...state,
                countriesLoaded: state.countriesLoaded.slice().sort(function compare(a,b){
                    if ( a.name < b.name ){
                        return -1;
                    }
                    if ( a.name > b.name ){
                    return 1;
                    }
                    return 0;
                })
            }
            case ORDER_DSC:
                return {
                    ...state,
                    countriesLoaded: state.countriesLoaded.slice().sort(function compare(a,b){
                        if ( a.name < b.name ){
                            return -1;
                        }
                        if ( a.name > b.name ){
                        return 1;
                        }
                        return 0;
                    }).reverse()
                }
            case ORDER_POP:
                return {
                    ...state,
                    countriesLoaded: state.countriesLoaded.slice().sort(function compare(a,b){
                        return a.population - b.population;
                    }).reverse()
                }
            case ORDER_CONTINENT:
                return {
                    ...state,
                    countriesLoaded: state.countriesLoaded.filter(country => country.subregion.indexOf(action.payload) !== -1) 
                } 

        default:
            return state;
    }
}

export default rootReducer;