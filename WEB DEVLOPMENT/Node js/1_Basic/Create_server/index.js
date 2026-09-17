//require(export) http module 
const http = require("http")

// //Create server
// const server = http.createServer((req, res) => {
//     console.log("created")
//     if (req.url == '/') {
       
//         res.setHeader('Content-Type','text/html')
//         res.write('<h1>hello</h1>')
//         res.end()
//     }
//     else if (req.url == '/google')
//     {
//         res.statusCode = 301
//         req.setHeader('Location', '/about')
//         res.end()
       
//     }
//     else if (req.url == '/about')
//     {
//         res.setHeader('Content-Type','text/html')
//         res.write('<h1>about</h1>')
//         res.end()
//         }
//     else
//     {
//         res.statusCode = 404
//         res.end()
//         }
  
   

// });

// //listen server at localhost 3000 port
// server.listen(3000, 'localhost', () => {
//   console.log("listing")
// });


const server = http.createServer((req, res) => {
    
    if (req.url == "/")
        res.end("home");
    else 
        res.end("not home")
})


server.listen(3000, () =>
{
    console.log("i am listing to you")
})

