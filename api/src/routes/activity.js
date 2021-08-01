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
        
        await activity.setCountries(req.body.countries)
        res.status(201).send(activity)
        
    } catch (error) {
        next(error)    
    }



})

module.exports = router