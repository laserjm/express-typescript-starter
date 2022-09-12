/**
 * Required Modules
 */
import app from "./server";
import config from "./config";

/**
 * Server Activation
 */
if (!config.port) {
  process.exit(1);
}
const server = app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});

//
// https://github.com/docker/awesome-compose/blob/master/react-express-mysql/backend/src/index.js
// graceful shutdown of node process
//
// quit on ctrl-c when running docker in terminal
process.on("SIGINT", function onSigint() {
  console.info(
    "Got SIGINT (aka ctrl-c in docker). Graceful shutdown ",
    new Date().toISOString()
  );
  shutdown();
});

// quit properly on docker stop
process.on("SIGTERM", function onSigterm() {
  console.info(
    "Got SIGTERM (docker container stop). Graceful shutdown ",
    new Date().toISOString()
  );
  shutdown();
});

// shut down server
function shutdown() {
  server.close(function onServerClosed(err: any) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
}
//
// need above in docker container to properly exit
//
