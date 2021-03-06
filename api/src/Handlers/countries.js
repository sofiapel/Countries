const axios = require('axios');
const { Country, Activity } = require('../db')
const { Op } = require("sequelize")

const getAllCountries = async (req, res, next) =>{
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
        const countre = await Promise.all(response.data.map(c=>{
           return Country.findOrCreate({
                where:{
                id: c.alpha3Code,
                name: c.name.toLowerCase(),
                flag: c.flag,
                capital: c.capital,
                subregion: c.subregion,
                area: c.area+'',
                population: c.population+'',
                }})}))
                console.log(req.query.name)
                if (req.query.name){
                    nameQ = req.query.name.toLowerCase();
                    try{
                        const countries = await Country.findAll({
                            where:{
                                name: {
                                    [Op.iLike]: `%${nameQ}%` 
                                    //[Op.startsWith]: nameQ
                                }            
                            }
                        })
                        if(countries.length > 0){
                            res.json(countries)
                        }else{
                          //204 404???
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
            
                        res.status(200).json(countries)
            
                    }catch(error){
                        next(error)
                    }
                }
            
            // if(req.query.name){
            //     res.json(countries)
            // }
            // if(!req.query.name){
            // res.json(countre)}
        }    
                
    
//     countries.map(async c => {
//         const country = await Country.create({
//             id: c.alpha3Code,
//             name: c.name.toLowerCase(),
//             flag: c.flag,
//             subregion: c.subregion,
//             capital: c.capital,
//             area: c.area,
//             population: c.population
//         })
//         return country;
//     })}
// const getCountries = async(req,res,next) => { 
//     console.log(req.query.name)
//     if (req.query.name){
//         nameQ = req.query.name.toLowerCase();
//         try{
//             const countries = await Country.findAll({
//                 where:{
//                     name: {
//                         [Op.iLike]: `%${nameQ}%` 
//                         //[Op.startsWith]: nameQ
//                     }            
//                 }
//             })
//             if(countries.length > 0){
//                 res.json(countries)
//             }else{
//               //204 404???
//               res.send([{msg:'No country was founded'}])
//             }
            
    
//         }catch(error){
//             next(error)
//         }

//     }else{
//         try{
//             const countries = await Country.findAll({
//                 include:{
//                     model: Activity,
//                     attributes: ['id','name','difficulty', 'duration', 'season'], 
//                     through: { attributes: []}
//                 }
//             })

//             res.status(200).json(countries)

//         }catch(error){
//             next(error)
//         }
//     }




// }
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
    // getCountries,
    countryById
}

// const pageAsNumber = Number.parseInt(req.query.page);
// //el < 25 capaz lo puedo cambiar
// const page = (!Number.isNaN(pageAsNumber) 
//                         && pageAsNumber > 0 
//                         && pageAsNumber < 25)? pageAsNumber : 0;
// const size = 10;
// const countries = await Country.findAndCountAll({
//     limit: size,
//     offset: page*size

//   })