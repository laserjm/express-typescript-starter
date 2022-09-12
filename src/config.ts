import { Config } from "./interfaces/config.interface";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../../.env" });

const devConfig: Config = {
  port: parseInt(process.env.PORT as string, 10) || 3001,
  urls: {},
  auth: {},
  database: {},
};

let config: Config = {
  port: parseInt(process.env.PORT as string, 10) || 3001,
  urls: {},
  auth: {},
  database: {},
};
switch (process.env.NODE_ENV) {
  case "development":
    config = devConfig;
    break;

  default:
    config = devConfig;
    break;
}

export default config;
