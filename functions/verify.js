exports.handler = (event, context, callback) => {
  if (event.queryStringParameters.password !== process.env.PAGE_PASS) {
    callback(null, {
      statusCode: 403,
    })
  }
  callback(null, {
    statusCode: 200,
    body: 'good',
  })
}
