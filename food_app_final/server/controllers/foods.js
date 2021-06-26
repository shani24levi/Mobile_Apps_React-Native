const express = require('express');
const { foodModel } = require("../models/foods");
const { validFood } = require("../validations/foods");


const getFoods = (req, res) => {
    try {
        foodModel.find({ user: req._id }).populate('user', 'avatar user email')
            .then(data => { res.json(data); })
            .catch(err => { res.status(404).json(err); })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

//by id of profile 
const getFoodById = (req, res) => {
    try {
        foodModel.find({ _id: req.params.id }).populate('user', 'avatar user email')
            .then(data => { res.json(data); })
            .catch(err => { res.status(404).json(err); })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const getAvilibalFood = (req, res) => {
    try {
        foodModel.find({ user: req._id , avilibal: true}).populate('user', 'avatar user email')
            .then(data => { res.json(data); })
            .catch(err => { res.status(404).json(err); })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const getAllAvilibalFoods = (req, res) => {
    try {
        foodModel.find({avilibal: true}).populate('user', 'avatar user email')
            .then(data => { res.json(data); })
            .catch(err => { res.status(404).json(err); })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const addFood = async (req, res) => {
    try {
        let valid = validFood(req.body);
        if (!valid.error) {
            try {
                req.body.user = req._id;
                console.log(req.body);
                let data = await foodModel.insertMany([req.body]);
                res.json(data);
            }
            catch (err) {
                res.status(400).json({ message: "Erorr" });
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

const editFood = async (req, res) => {
    try {
        let valid = validFood(req.body);
        if (!valid.error) {
            try {
                req.body.user = req._id;
                let data = await foodModel.updateOne({ _id: req.id }, req.body);
                res.json(data);
            }
            catch (err) {
                res.status(404).json({ message: "food not found" });
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

const searchFoods = (req, res) => {
    try {
        let searchQ = req.query.q;
        let mySearch = new RegExp(searchQ);
        console.log(mySearch);

        foodModel.find({ $or: [{ title: mySearch }, { type: mySearch }, { amount: mySearch }] })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(402).json({ err })
            })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const deleteFood = (req, res) => {
    try {
        foodModel.deleteOne({ _id: req.params.id }, (err, data) => {
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

module.exports = {
    getFoods,
    getFoodById,
    getAvilibalFood,
    getAllAvilibalFoods,
    addFood,
    editFood,
    searchFoods,
    deleteFood
};