const axios = require('axios');
const { Country, Activity } = require('../db')
const { Op } = require("sequelize")

const getAllCountries = async (_req, _res, next) =>{
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const countries = response.data;

    countries.map(c => {
        Country.create({
            id: c.alpha3Code,
            name: c.name,
            flag: c.flag,
            subregion: c.subregion,
            capital: c.capital,
            area: c.area,
            population: c.population

        })
    })
}
const getCountries = async(req,res,next) => { 
    //const name = req.query.name;
    
    if (req.query.name){
        nameQ = req.query.name.charAt(0).toUpperCase() + req.query.name.slice(1);
        try{
            const countries = await Country.findAll({
                where:{
                    name: {
                        [Op.startsWith]: nameQ
                    }            
                }
            })
            if(countries.length > 0){
                res.json(countries)
            }else{
                res.status(404).send('el país no fue encontrado')
            }
            
    
        }catch(error){
            next(error)
        }

    }else{
        try{
            const pageAsNumber = Number.parseInt(req.query.page);
            const page = (!Number.isNaN(pageAsNumber) 
                                    && pageAsNumber > 0 
                                    && pageAsNumber < 25)? pageAsNumber : 0;
            const size = 10;
            const countries = await Country.findAndCountAll({
                limit: size,
                offset: page*size

            })
            res.json(countries)

        }catch(error){
            next(error)
        }
        

    }




}
const countryById = async (req,res, next)=> {
    const id  = req.params.idPais
    try{
        const country = await Country.findOne({
            where: {
                id: id
            },
            include: Activity
        })
        res.json(country)

    }catch(error){
        next(error)
    }
    
}

module.exports = {
    getAllCountries,
    getCountries,
    countryById
}