const { Router } = require('express');
const axios = require('axios');

const router = Router()

router.get('/', async(_req,res) =>{
    try {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all')
        // console.log(countries)
        console.log(countries.data)
        res.json(countries.data)
        
    } catch(err) {
        console.log('jaja entraba aca')
        res.send(err)

    }
    
    
    //res.send('locura')
})

module.exports = router;