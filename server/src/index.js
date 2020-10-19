require('dotenv').config()
const app = require('./server')

require('./database')

const port = app.get('port')
app.listen(port, () => console.log(`http://localhost:${port}`))
