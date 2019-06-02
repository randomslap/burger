const express = require("express");

const router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burger: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function (req, res) {
	burger.insertOne(req.body.burger_name,
		function (result) {
			console.log(result);
			res.redirect('/')
		}
	);
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log(condition);
	burger.updateOne(
		condition,
		function(result) {
			if (result.changedRows == 0) {
				return res.status(404).end();
			} else {
				res.status(200).end();
			}
		}
	);
});

module.exports = router;
