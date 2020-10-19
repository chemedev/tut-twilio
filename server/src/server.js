const path = require('path')
const morgan = require('morgan')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// settings
app.set('view engine', '.hbs')
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
const hbsOptions = {
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials')
}
app.engine('.hbs', exphbs(hbsOptions))

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require('./routes/index.routes'))

// static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
