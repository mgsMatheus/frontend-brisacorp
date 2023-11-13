const proxy = [
  {
    context: "/api",
    target: "http://localhost:3000/",
    pathRewrite: { "^/api": "/v1" },
  },
];
module.exports = proxy;
