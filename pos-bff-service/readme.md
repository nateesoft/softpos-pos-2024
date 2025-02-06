# setup
node --env-file=.env.app01 server.js
node --env-file=.env.app02 server.js
node --env-file=.env.app03 server.js


# fix bug setupProxy from reactjs
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://your-api.com",
    changeOrigin: true,
  })
);