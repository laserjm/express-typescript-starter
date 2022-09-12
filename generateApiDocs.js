// import swaggerAutogen from "swagger-autogen";
const options = {
  openapi: "3.0.0",
};
const swaggerAutogen = require("swagger-autogen")(options);

const doc = {
  info: {
    title: "Your API here",
    description: "Your api description here",
  },
  host: "localhost:3001/api",
  schemes: ["http"],
  definitions: {
    Message: {
      message: "Your Message",
    },
    SampleMessage: {
      Message: {
        $ref: "#/definitions/Message",
      },
    },
  },
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
};

const outputFile = "./docs/swagger-api-doc.json";
const endpointFiles = ["./src/controllers/*.controller.ts"];

swaggerAutogen(outputFile, endpointFiles, doc);
