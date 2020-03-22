// server.js
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const connectApp = app.getRequestHandler()
const serverless = require('serverless-http');

const lambda = serverless(connectApp);

const prepareAppPromise = app.prepare().catch((e) => {
  console.error(e)
})

module.exports.handler = async (event, context) => {
  // you can do other things here
  await prepareAppPromise
  const result = await lambda(event, context);
  // and here
  return result;
};
