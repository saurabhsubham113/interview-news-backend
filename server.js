
const express = require('express');
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors');
const app = express();

//cors
app.use(cors());

//for logging purposes only
app.use(morgan('dev'))

//routes
const newsRoute = require('./routes/newsRoutes')


app.use('/api/v1', newsRoute)



const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log('listening on port ' + PORT))