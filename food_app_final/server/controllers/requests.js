const express = require('express');
const { requestModel } = require("../models/requests");

//asoming receiver will never what to be the sender.
const getRequests = async(req, res) => {
    try {
        let receiver = await requestModel.find({ receiver: req._id }).populate('receiver sender food', 'avatar user email type')
        console.log(receiver.lenght);
        if (!receiver.lenght) {
            let sender = await requestModel.find({ sender: req._id }).populate('receiver sender food', 'avatar user email type')
            if (!sender) {
                res.status(404).json("id not found");
            }
            else
                res.json(sender);
        }
        else
            res.json(receiver);
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

//by id of requst 
const getRequestsById = async (req, res) => {
    try {
        requestModel.findOne({ _id: req.params.id }).populate('receiver sender food', 'avatar user email type')
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

const getRequestsForIdFood = async(req, res) => {
    try {
        let food = await requestModel.find({ food: req.params.id}).populate('receiver sender food', 'avatar user email type')
        if (food)
            res.json({ food });
        else
            res.status(404).json("no requst found fo this food");
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const getAllAvilibalFoods = async (req, res) => {
    try {
        foodModel.find({ avilibal: true }).populate('receiver sender food', 'avatar user email type')
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

const craeteRequest = async (req, res) => {
    try {
        req.body.sender = req._id;
        console.log(req.body);
        let data = await requestModel.insertMany([req.body]);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

//object id 
const editeRequest = async (req, res) => {
    try {
        let data = await requestModel.updateOne({ _id: req.params.id }, req.body);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const deleteRequest = (req, res) => {
    try {
        requestModel.deleteOne({ _id: req.params.id }, (err, data) => {
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
    getRequests,
    getRequestsById,
    getRequestsForIdFood,
    craeteRequest,
    editeRequest,
    deleteRequest
};