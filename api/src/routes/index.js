const { Router } = require('express');
const countriesRoutes = require('./countries.js')
const activityRoutes = require('./activity')

const router = Router();


router.use('/countries', countriesRoutes)
router.use('/activity', activityRoutes)

module.exports = router;
