import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, ORDER_ASC, ORDER_DSC,ORDER_POP, ORDER_CONTINENT, GET_ACTIVITIES, SET_PAGE, ORDER_AREA } from "../actions/names"
const initialState = {
    allCountries:[],
    countriesLoaded: [],
    countryById: undefined,
    pages: 0,
    
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case SET_PAGE:
            return{
                ...state,
                pages: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                countriesLoaded: state.allCountries.filter(c =>{
                    return c.activities && c.activities.some(a => a.name.toUpperCase() == action.payload.toUpperCase())
                })
            }
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryById: action.payload
            }
        case GET_COUNTRIES_BY_NAME:

            return {
                ...state,
                countriesLoaded: action.payload
            }
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countriesLoaded: action.payload,
            }
        case ORDER_ASC:
            return {
                ...state,
                countriesLoaded: state.countriesLoaded.slice().sort(function compare(a,b){
                    if ( a.name.localeCompare(b.name) < b.name.localeCompare(a.name) ){
                        return -1;
                    }
                    if ( a.name.localeCompare(b.name) > b.name.localeCompare(a.name) ){
                    return 1;
                    }
                    return 0;
                })
            }
            case ORDER_DSC:
                return {
                    ...state,
                    countriesLoaded: state.countriesLoaded.slice().sort(function compare(a,b){
                        if ( a.name.localeCompare(b.name) < b.name.localeCompare(b.name) ){
                            return -1;
                        }
                        if ( a.name.localeCompare(b.name) > b.name.localeCompare(b.name) ){
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
            case ORDER_AREA:
                return {
                    ...state,
                    countriesLoaded: state.countriesLoaded.slice().sort(function compare(a,b){
                        return a.area - b.area;
                    }).reverse()
    
                }
            case ORDER_CONTINENT:
                return {
                    ...state,
                    countriesLoaded: state.allCountries.filter(country => country.subregion.indexOf(action.payload) !== -1) 
                } 

        default:
            return state;
    }
}

export default rootReducer;