const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/users')

router.get('/q', (req, res) => {
  res.json('hi')
});

router.get('/auth',authToken,(req,res) => {
  res.json({status:"ok"}) 
})

/* GET all users */
router.get('/', (req, res) => {
  control.getUsers(req,res);
});

router.get('/:id', (req, res) => {
  control.getUserById(req,res);
});

/* GET user by id after login*/
router.get('/user',authToken, (req, res) => {
  console.log('helo');
  control.getUser(req, res);
})

router.post("/login", async (req, res) => {
  control.userLogin(req, res);
})

router.post("/", async (req, res) => {
  control.userRegister(req, res);
})

router.put("/",authToken, async (req, res) => {
  control.editUser(req, res);
})

router.delete("/",authToken, (req,res) => {
  control.deleteUser(req, res);
})


module.exports = router;