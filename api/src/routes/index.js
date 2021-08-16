const { Router } = require('express');
const countriesRoutes = require('./countries.js')
const activityRoutes = require('./activity');
const { getAllCountries } = require('../Handlers/countries.js');

const router = Router();

router.use('/all', getAllCountries)
router.use('/countries', countriesRoutes)
router.use('/activity', activityRoutes)

module.exports = router;
