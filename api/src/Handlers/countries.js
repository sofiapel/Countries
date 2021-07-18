const axios = require('axios');
const { Country, Activity } = require('../db')
const { Op } = require("sequelize")

const getAllCountries = async (_req, _res, next) =>{
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const countries = response.data;

    countries.map(async c => {
        const country = await Country.create({
            id: c.alpha3Code,
            name: c.name,
            flag: c.flag,
            subregion: c.subregion,
            capital: c.capital,
            area: c.area,
            population: c.population
        })
        return country;
    })
}
const getCountries = async(req,res,next) => { 
    //const name = req.query.name;
    console.log(req.query.name)
    if (req.query.name){
        nameQ = req.query.name.charAt(0).toUpperCase() + req.query.name.slice(1);
        try{
            const countries = await Country.findAll({
                where:{
                    name: {
                        // [Op.iLike]: `%${name}%` 
                        [Op.startsWith]: nameQ
                    }            
                }
            })
            //console.log(countries)
            if(countries.length > 0){
                res.json(countries)
            }else{
                //204???
                res.send([{msg:'No country was founded'}])
            }
            
    
        }catch(error){
            next(error)
        }

    }else{
        try{
            const countries = await Country.findAll({
                include:{
                    model: Activity,
                    attributes: ['id','name','difficulty', 'duration', 'season'], 
                    through: { attributes: []}
                }
            })
            // const pageAsNumber = Number.parseInt(req.query.page);
            // //el < 25 capaz lo puedo cambiar
            // const page = (!Number.isNaN(pageAsNumber) 
            //                         && pageAsNumber > 0 
            //                         && pageAsNumber < 25)? pageAsNumber : 0;
            // const size = 10;
            // const countries = await Country.findAndCountAll({
            //     limit: size,
            //     offset: page*size

            // })
            res.status(200).json(countries)

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
        res.status(200).json(country)

    }catch(error){
        next(error)
    }
    
}

module.exports = {
    getAllCountries,
    getCountries,
    countryById
}