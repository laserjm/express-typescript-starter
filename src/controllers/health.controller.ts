/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { checkJwt } from "../middleware/authz.middleware";
import { Message } from "../interfaces/message.interface";

/**
 * Router Definition
 */

export const healthRouter = express.Router();

/**
 * Controller Definitions
 */

healthRouter.get("/health", async (req: Request, res: Response) => {
  /**
   * #swagger.tags = ["Health"]
   * #swagger.summary = "Returns a health message"
   * #swagger.description = "Use to cheak availability of service"
   * #swagger.operationId = "Your_operationId_here"
   * #swagger.responses[200] = { schema: { $ref: "#/definitions/Message" }}
   */
  const message: Message = { message: "Healthy" };
  res.status(200).send(message);
});

//healthRouter.use(checkJwt);

healthRouter.get(
  "/health-auth",
  checkJwt,
  async (req: Request, res: Response) => {
    /**
     * #swagger.tags = ["Health"]
     * #swagger.summary = "Returns a authorized health message"
     * #swagger.description = "Use to cheak availability and authorization of service"
     * #swagger.operationId = "Your_second_operationId_here"
     * #swagger.responses[200] = { schema: { $ref: "#/definitions/Message" }}
     * #swagger.security = [{ "bearerAuth": [] }]
     */
    res.status(200).send({
      message: "Healthy and auth works",
    });
  }
);
