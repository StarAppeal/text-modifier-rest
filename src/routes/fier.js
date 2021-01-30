var express = require("express");
var fizierer = require("../ifies");
var router = express.Router();

router.post("/owo", function (req, res, next) {
  console.log("starting owo-action");
  res.status(200).send(compute(req, fizierer.owo));
});

router.post("/winzi", function (req, res, next) {
  console.log("starting tiny-action");
  res.status(200).send(compute(req, fizierer.winzi));
});

router.post("/emoji", function (req, res, next) {
  console.log("starting emoji-action");
  res.status(200).send(compute(req, fizierer.emoji));
});

function compute(req, fierFunction) {
  let result = {};
  let oldTime = new Date().getTime();
  let text = getText(req);
  var fied = fierFunction(text);
  let timeNeeded = new Date().getTime() - oldTime;
  console.log("result is: " + fied);
  console.log("it took " + timeNeeded + "ms");
  result.result = fied;
  result.timeNeeded = timeNeeded;
  return result;
}

function getText(req) {
  console.log("HÄ");
  console.log(req);
  var text = req.body.text;
  console.log("Got text: " + text);
  return text;
}

module.exports = router;
