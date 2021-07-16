import AddActivity from '../components/AddActivity';

const { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_ID, ORDER_ASC, ORDER_DSC, ORDER_POP, ORDER_CONTINENT, GET_ACTIVITIES } = require('./names');
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

export function orderContinent(continent){
    return {
        type: ORDER_CONTINENT,
        payload: continent
    }
}

export function getActivities(activity){
    return async(dispatch) =>{
        try{
            const countries = await axios.get('http://localhost:3001/countries')
            const countriesByActivity = countries.data.filter(c =>{
                return c.activities && c.activities.some(a => a.name.toUpperCase() == activity.toUpperCase())
            })
            return dispatch({
                type: GET_ACTIVITIES,
                payload: countriesByActivity
            })
        }catch(err){
            console.log(err.message)
        }
    }

}


export function postActivity(activity){
    return async (dispatch) => {
        await axios.post('http://localhost:3001/activity', activity)   
    }
}