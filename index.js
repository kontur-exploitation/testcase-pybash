const http = require('http')
const port = 80

const requestHandler = (request, response) => {
    console.log(Date(), ' Requesting ', request.url)
    response.end('Hello! This is a test')
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('Error - ', err)
    }
    console.log(`Server is listening on ${port}`)
})

process.on('SIGINT', function() {
  console.log("\nShutting down from SIGINT (Ctrl+C)");
  process.exit();
});