var express = require('express');
var router = express.Router();

const parts = require('../public/javascripts/spareParts');

/* GET home page. */
router.post('/saveparts', async (req, res) =>{
    const { model, year, partname } = req.body;
    let part = {};
    part.model = model;
    part.year = year;
    part.partname = partname;
    let partsObj = new parts(part);
    await partsObj.save();
    res.json(partsObj);
});

  router.get('/findparts', async (req, res) => {
    console.log("rewrdsf:",req.query.model, req.query.year);
    try {
        if(req.query.model && req.query.year ){
            let partList = await  parts.find({"model":req.query.model, "year":req.query.year});
            console.log('part list',partList);
             res.json(partList);
        }else{
             res.json({"error":"Please provide valid model and year "});
        }
      
    } catch (error) {
        console.log('error details', error);
    }
  });

module.exports = router;
