exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: process.env.PAGE_PASS,
  })
}
