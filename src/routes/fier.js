const express = require("express");
const fizierer = require("../ifies");
const router = express.Router();

Object.keys(fizierer).forEach((f) => {
  router.post("/" + f, async function (req, res) {
    res.status(200).send(await compute(req));
  });
});

router.get("/", async function (req, res) {
  let result = {};
  result.result = fizierer;
  res.status(200).send(result);
});

async function compute(req) {
  const url = req.url.substring(1);
  console.log(`starting ${url}-action`);
  const fierFunction = fizierer[url].function;
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
