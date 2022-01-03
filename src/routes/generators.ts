import GeneratorResponse from "@/constants/interfaces/GeneratorResponse";
import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import express from "express";
import generators from "../generators";
const router = express.Router();

Object.keys(generators).forEach((generatorKey: keyof typeof generators) => {
  router.post("/" + generators[generatorKey].value, async function (
    req: express.Request,
    res: express.Response
  ) {
    res.status(200).send(await compute(req.body, req.url.substring(1)));
  });
});

router.get("/", async function (_req, res) {
  const result = generators;
  res.status(200).send(result);
});

async function compute(
  req: GeneratorRequest,
  url: string
): Promise<GeneratorResponse> {
  console.log(`Received call to ${url}`);
  const generatorFunction = generators[url].function;
  const oldTime = new Date().getTime();
  const generated = await generatorFunction(req);
  const time = new Date().getTime() - oldTime;
  console.log(`Response is: ${generated}`);
  console.log(`Time: ${time}`);

  const result = { text: generated, time };
  return result;
}

export default router;
