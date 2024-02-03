const express = require('express');
const router = express.Router();
router.route("/").get((req,res) => {
    res.status(200).json({Message: "Get All Contacts"});
});
router.route("/").post((req,res) => {
    res.status(200).json({Message: "Create Contact"});
});
router.route("/:id").get((req,res) => {
    res.status(200).json({Message: `Get Contact for ${req.params.id}`});
});
router.route("/:id").put((req,res) => {
    res.status(200).json({Message: `Update Contact for ${req.params.id}`});
});
router.route("/:id").delete((req,res) => {
    res.status(200).json({Message: `Delete Contact for ${req.params.id}`});
});
module.exports=router;