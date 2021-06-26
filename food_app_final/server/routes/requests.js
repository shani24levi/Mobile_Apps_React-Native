const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/requests');

//for giver
router.get('/',authToken, async(req, res) => {
    control.getRequests(req, res); 
});

router.get('/:id',authToken, (req, res) => {
    control.getRequestsById(req, res); 
});

router.get('/food/:id', async(req, res) => {
    control.getRequestsForIdFood(req, res); 
});

router.post('/',authToken, (req, res) => {
    control.craeteRequest(req, res); 
});

router.put('/:id',authToken, (req, res) => {
    control.editeRequest(req, res); 
});

//for who that need only 
router.delete('/:id',authToken, (req, res) => {
    control.deleteRequest(req, res); 
});

module.exports = router;