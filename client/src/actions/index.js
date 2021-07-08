const { GET_COUNTRIES, GET_COUNTRIES_BY_NAME } = require('./names');
const axios = require('axios');

export function getCountries(page){
    return function (dispatch){
        return axios.get('http://localhost:3001/countries?page=' + page)
        .then(response => dispatch({
            type:GET_COUNTRIES,
            payload: response.data
        }))
    }
}
export function getCountriesByName(name){
    return function (dispatch){
        return function (dispatch){
            return axios.get('http://localhost:3001/countries?name='+ name)
            .then(response => dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: response.data
            }))
        }
    }
}