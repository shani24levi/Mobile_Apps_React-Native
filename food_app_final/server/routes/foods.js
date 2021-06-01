const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/foods');
const multer =require('multer');
var upload = multer({ dest: 'image/' })
const { foodModel } = require("../models/foods");



router.get('/',authToken, (req, res) => {
    control.getFoods(req, res); 
});

router.get('/:id', (req, res) => {
    control.getFoodById(req, res); 
});

router.get('/avilibal',authToken, (req, res) => {
    control.getAvilibalFood(req, res); 
});

router.get('/all/avilibals', (req, res) => {
    control.getAllAvilibalFoods(req, res); 
});

router.post('/',authToken, (req, res) => {
    control.addFood(req, res); 
});

router.post('/img',authToken,upload.single('img'),async (req,res) => {
    req.body.img = `https://foodelicious-app.herokuapp.com/${req.file.filename}`
    control.addFood(req, res);
  })

router.put('/',authToken, (req, res) => {
    control.editFood(req, res); 
});

//search will be by the state in client side
// localhost:5000/search/?q=...
router.get("/search/", (req, res) => {
    control.searchFoods(req, res);
});

router.get('/all/search', (req, res) => {
    // res.json({status:"ok"}) 
    let searchQ = req.query.q;
    console.log(searchQ);
      let mySearch = new RegExp(`${searchQ}`);
      console.log(mySearch);
  
      foodModel.find({$or:[{ title: mySearch},{ type: mySearch}] , avilibal: true}, (err, data) => {
      if (err) { res.status(400).json(err) }
      res.json(data);
    })
});

module.exports = router;