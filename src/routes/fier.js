const express = require("express");
const fizierer = require("../ifies");
const router = express.Router();

router.post("/owo", async function (req, res, next) {
  console.log("starting owo-action");
  res.status(200).send(await compute(req, fizierer.owo));
});

router.post("/winzi", async function (req, res, next) {
  console.log("starting tiny-action");
  res.status(200).send(await compute(req, fizierer.winzi));
});

router.post("/emoji", async function (req, res, next) {
  console.log("starting emoji-action");
  res.status(200).send(await compute(req, fizierer.emoji));
});

router.post("/spermi", async function (req, res, next) {
  console.log("starting spermi-action");
  res.status(200).send(await compute(req, fizierer.spermi));
});

router.post("/translate", async function (req, res, next) {
  console.log("starting translating-action");
  res.status(200).send(await compute(req, fizierer.translate));
});

async function compute(req, fierFunction) {
  let result = {};
  let oldTime = new Date().getTime();
  let text = getText(req);
  let fied = await fierFunction(text);
  let timeNeeded = new Date().getTime() - oldTime;
  console.log("result is: " + fied);
  console.log("it took " + timeNeeded + "ms");
  result.result = fied;
  result.timeNeeded = timeNeeded;
  return result;
}

function getText(req) {
  let text = req.body.text;
  console.log("Got text: " + text);
  return text;
}

module.exports = router;
