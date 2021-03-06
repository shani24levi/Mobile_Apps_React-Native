const express = require('express');
const { userModel } = require("../models/users");
const { validUser, validLogin, createToken, validEditUser } = require("../validations/users");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const gravatar = require('gravatar');

const getUsers = (req, res) => {
  try {
    userModel.find({}, { email: 1, user: 1 })
      .then(data => { res.json(data); })
      .catch(err => { res.status(400).json(err); })
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}

const getUser = (req, res) => {
  try {
    let userId = req._id;
    userModel.findOne({ _id: userId })
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}

const userLogin = async (req, res) => {
  try {
    let valid = validLogin(req.body);
    if (!valid.error) {
      try {
        let user = await userModel.findOne({ email: req.body.email })
        if (user) {
          // Checks if the password matches the user
          let validPass = await bcrypt.compare(req.body.pass, user.pass);
          if (!validPass) { res.status(401).json({ message: "Password does not match" }) }
          else {
            //console.log(user)
            let token = createToken(user.id, user.email, user.user , user.avatar);
            console.log(token);
            res.json({ token })
          }
        }
        else {
          res.status(404).json({ message: "user not found" })
        }
      }
      catch (err) {
        res.status(401).json(err);
      }
    }
    else {
      res.status(401).json(valid.error.details[0]);
    }
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}

const userRegister = async (req, res) => {
  try {
    let valid = validUser(req.body);
    if (!valid.error) {
      //Defines the level of encryption
      let salt = await bcrypt.genSalt(10);
      req.body.pass = await bcrypt.hash(req.body.pass, salt);
      //Create avater for poto:
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      req.body.avatar = avatar;

      try {
        let data = await userModel.insertMany([req.body]);
        console.log(data);
        // Hides properties and displays only properties that are listed in a function
        let dataHidden = _.pick(data[0], ["user", "email", "_id", "date_time"])
        res.json(dataHidden)
      }
      catch (err) {
        res.status(400).json({ message: "user already in system ", code: "duplicate" });
      }
    }
    else {
      res.status(400).json(valid.error.details[0]);
    }
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}

const editUser = async (req, res) => {
  try {
    let userId = req._id;

    let valid = validEditUser(req.body);
    if (!valid.error) {

      try {
        let data = await userModel.updateOne({ _id: userId }, req.body);
        res.json(data);
      }
      catch (err) {
        res.status(400).json({ message: "user already in system ", code: "duplicate" });
      }
    }
    else {
      res.status(400).json(valid.error.details[0]);
    }
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}

const deleteUser = (req, res) => {
  try {
    let userId = req._id;
    userModel.deleteOne({ _id: userId }, (err, data) => {
      if (err) { res.status(400).json(err) }
      res.json(data);
    })
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}

const getUserById = async (req, res) => {
  try {
    let user = await userModel.find({ _id: req._id, patients: req.params.id })
    if (user) {
      res.status(200).json(user);
    }
    else {
      res.status(404).json({ message: "user is not found" });
    }
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}


module.exports = {
  getUsers,
  getUserById,
  getUser,
  userLogin,
  userRegister,
  editUser,
  deleteUser
};