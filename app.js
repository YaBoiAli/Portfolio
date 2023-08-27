const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const path = require('path');


app.use("/public", express.static(path.join(__dirname, 'public')));
 app.use('/img', express.static(__dirname + 'public/img'))
 app.use('/css', express.static(__dirname + 'public/css'))
 app.use('/js', express.static(__dirname + 'public/js'))
 app.use('/audio', express.static(__dirname + 'public/audio'))

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/interest', (req,res) =>{
    res.sendFile(__dirname + '/views/interest.html')
})


app.listen(port, () => console.info(`listening on port ${port}`))