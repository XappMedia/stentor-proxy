import * as express from "express";

const proxy = require("http-proxy-middleware");

const PORT = 8080;
const HOST = "0.0.0.0";

const REDIRECT_DOMAIN: string = process.env["STENTOR_DOMAIN"] || "https://dev-east-api.xapp.media";

const app = express();

console.log("DOMAIN = " + REDIRECT_DOMAIN);

const routeProxy = proxy({
    target: REDIRECT_DOMAIN,
    changeOrigin: true,
    topLevel: "debug"
});

app.get("/*", routeProxy);

app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);