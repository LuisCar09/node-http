const http = require('node:http');
const data = require('./data.js')
const port = 3000


const server = http.createServer((req,res) => {
    const {title,subtitle,description} = data

    const html = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${title}</title>
                    </head>
                    <body>
                        <h1>${title}</h1>
                        <h2>${subtitle}</h2>
                        <p>${description}</p>
                    </body>
                </html>`

    res.end(html)
})

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})