var express = require('express');
var router = express.Router();

const locations = require('../public/javascripts/locations');

/* GET home page. */
router.post('/savelocation', async (req, res) =>{
    const { location } = req.body;
    let locality = {};
    locality.location = location
    let locationObj = new locations(locality);
    await locationObj.save();
    res.json(locationObj);
});

  router.get('/findlocation', async (req, res) => {
    console.log("rewrdsf:",req.query.location);
    try {
        if(req.query.location === "mumbai"){
            let location = await  locations.find({"location":req.query.location});
            console.log('part list',location);
             res.json(location);
        }else{
             res.json({"error":"Please provide valid location "});
        }
      
    } catch (error) {
        console.log('error details', error);
    }
  });

module.exports = router;
