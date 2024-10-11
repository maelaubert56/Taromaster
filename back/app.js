const express = require('express')
const app = express()
const port = 3008
const cors = require('cors');

const userRoutes = require('./routes/Users')
const partiesRoutes = require("./routes/Parties")
const donnesRoutes = require('./routes/Donnes')
const playerInGamesRoutes = require("./routes/PlayerInGame")
const adminRoutes = require("./routes/Admin")


app.use(express.json({limit: '50mb'}));

const allowedOrigins = ['https://taromaster.maelaubert.fr'];
app.use(function(req, res, next) {
  const origin = req.headers.origin;
  if(allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/users', userRoutes)
app.use('/parties', partiesRoutes)
app.use('/donnes', donnesRoutes)
app.use('/playeringame', playerInGamesRoutes)
app.use('/admin', adminRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
