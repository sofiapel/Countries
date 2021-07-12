const { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID } = require('./names');
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