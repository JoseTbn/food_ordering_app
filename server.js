const express = require('express');
const bodyParser = require('body-parser'); 
require('dotenv').config()
const app = express();
const path = require('path')




const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'build')))



app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



// app.get('/api/youtube', (req, res) => {
//   res.send({
//     msg: 'Hello les hardcoders ! '
//   })
// })


app.listen(PORT, ( )=>{
    console.log(` Listening to requests on http://localhost: ${PORT}`);
})