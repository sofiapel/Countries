const { Router } = require('express');
const { Country } = require('../db')
const axios = require('axios');
const { getCountries, countryById } = require('../Handlers/countries')
const activityRoute = require("../routes/activity")


const router = Router()

router.get('/', getCountries)
router.get('/:idPais', countryById)
router.post('/', activityRoute)



module.exports = router;