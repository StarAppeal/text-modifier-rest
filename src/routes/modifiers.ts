import ModifierResponse from "@/constants/interfaces/ModifierResponse";
import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import express from "express";
import modifiers from "../modifiers";

const router = express.Router();

Object.keys(modifiers).forEach((modifierKey: keyof typeof modifiers) => {
  router.post("/" + modifiers[modifierKey].value, async function (
    req: express.Request,
    res: express.Response
  ) {
    res.status(200).send(await compute(req.body, req.url.substring(1)));
  });
});

router.get("/", async function (_req, res) {
  const result = modifiers;
  res.status(200).send(result);
});

async function compute(
  req: ModifierRequest,
  url: string
): Promise<ModifierResponse> {
  console.log("Received call to", url);
  const modifierFunction = modifiers[url].function;
  const oldTime = new Date().getTime();
  const modified = await modifierFunction(req);
  const time = new Date().getTime() - oldTime;
  console.log("Response is", modified);
  console.log("Time was", time);

  const result = { text: modified, time };
  return result;
}

export default router;
