const { Router } = require('express');
const { Activity } = require('../db');

const router = Router()

router.post('/', async (req, res, next)=> {
    try {
        const activity = await Activity.create({
            name: req.body.name,
            difficulty: req.body.difficulty,
            duration: req.body.duration,
            season: req.body.season
        })
        
        //deberia llegar un arreglo con los id de los countries
        await activity.setCountries(req.body.countries)
        res.status(201).send(activity)
        
    } catch (error) {
        next(error)    
    }



})

module.exports = router