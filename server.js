// server.js
// @see https://strapi.io/documentation/v3.x/getting-started/deployment.html#application-configuration
// server.js content:

const strapi = require("@strapi/strapi");
strapi(/* {...} */).start();

// const strapi = require("strapi");

// if (process.env.NODE_ENV == "development")
//   strapi({ autoReload: { enabled: true } }).start();
// else strapi().start();
