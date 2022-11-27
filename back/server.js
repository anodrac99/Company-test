const { app } = require('./app')
const { db } = require('./utils/db.utils')
const { initModels } = require('./models/initModels')

db.authenticate()
    .then(() => console.log('data base auth!'))
    .catch(err => console.log(err))

initModels()

db.sync()
    .then(() => console.log('db sync!'))
    .catch(err => console.log(err))


app.listen(4000, () => console.log('Server ON!'))