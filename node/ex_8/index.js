const http=require('http')
const port=3001
const requestHandler = (request, response) => {  
    response.end('Congrats you\'re using your first Node.js Web Server')
  }

  const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('Error:', err)
  }
  console.log(`This HTTP server is running on port ${port}`)
})