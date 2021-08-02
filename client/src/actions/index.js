const { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, ORDER_ASC, ORDER_DSC, ORDER_POP, ORDER_CONTINENT, GET_ACTIVITIES,SET_PAGE, ORDER_AREA } = require('./names');
const axios = require('axios');

export function getCountries(){
    return function (dispatch){
        return axios.get('http://localhost:3001/countries')
        .then(response => dispatch({
            type:GET_COUNTRIES,
            payload: response.data
        }))
    }
}
export function getCountriesByName(name){
    return function (dispatch){
        return axios.get('http://localhost:3001/countries?name='+ name)
        .then(response => dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: response.data
        }))
    }
}

export function getCountryById(id){
    return function (dispatch){
        return axios.get('http://localhost:3001/countries/'+ id)
        .then(response => dispatch({
            type: GET_COUNTRY_BY_ID,
            payload: response.data
        }))
    }
}

export function orderAsc(){
    return {
        type: ORDER_ASC
    }
    
}

export function orderDsc(){
    return {
        type: ORDER_DSC
    }
}

export function orderPop(){
    return {
        type: ORDER_POP
    }
}

export function orderArea(){
    return {
        type: ORDER_AREA
    }
}


export function orderContinent(continent){
    return {
        type: ORDER_CONTINENT,
        payload: continent
    }
}



 export function getActivities(activity){
     return {
        type: GET_ACTIVITIES,
        payload: activity
     }

 }


export function postActivity(activity){
    return async (dispatch) => {
        await axios.post('http://localhost:3001/activity', activity)   
    }
}

export function setPage(n){
    return {
        type: SET_PAGE,
        payload: n
    }
}

export function resetContinent(boolean){
    return {
        type: 'RESET_CONTINENT',
        payload: boolean
    }
}