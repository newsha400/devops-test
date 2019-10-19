const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// const host = process.env.HOSTNAME
// const str = 'Hello world from '
// const response = str.concat(host)

console.log(response)
app.get('/', (req, res) => res.send("Hello world!"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
