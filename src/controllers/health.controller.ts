/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { checkJwt } from "../middleware/authz.middleware";

/**
 * Router Definition
 */

export const healthRouter = express.Router();

/**
 * Controller Definitions
 */

healthRouter.get("/health", async (req: Request, res: Response) => {
  res.status(200).send({ message: "Hello" });
});

//healthRouter.use(checkJwt);

healthRouter.get(
  "/health-auth",
  checkJwt,
  async (req: Request, res: Response) => {
    res.status(200).send({
      message: "scanjob-processor is alive and authentication works!",
    });
  }
);
