/**
 * Required External Modules
 */
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
// API Docs
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../docs/swagger-api-doc.json";

/**
 * App Variables
 */
const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * Export app
 */
export default app;
