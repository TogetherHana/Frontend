const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      // target: "http://localhost:8080",
      target: `${import.meta.env.VITE_BE_URI}`,
      changeOrigin: true
    })
  );
};
