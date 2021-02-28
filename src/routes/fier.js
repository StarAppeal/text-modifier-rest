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

router.post("/fancy", async function (req, res, next) {
  console.log("starting fancy-action");
  res.status(200).send(await compute(req, fizierer.fancy));
});

router.post("/leet", async function (req, res, next) {
  console.log("starting leeting-action");
  res.status(200).send(await compute(req, fizierer.leet));
});

router.post("/zalgo", async function (req, res, next) {
  console.log("starting zalgo-action");
  res.status(200).send(await compute(req, fizierer.zalgo));
});

async function compute(req, fierFunction) {
  let result = {};
  console.log(req.body);
  const oldTime = new Date().getTime();
  const text = getAttr(req, "text");
  const params = getAttr(req, "params");
  const fied = await fierFunction(text, params);
  const timeNeeded = new Date().getTime() - oldTime;
  console.log("result is: " + fied);
  console.log("it took " + timeNeeded + "ms");
  result.result = fied;
  result.timeNeeded = timeNeeded;
  return result;
}

function getAttr(req, attr) {
  const attribute = req.body[attr];
  if (!attribute) {
    console.log(`Couldn't get ${attr}`);
    return undefined;
  }
  return attribute;
}

module.exports = router;
