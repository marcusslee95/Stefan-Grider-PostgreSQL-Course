const app = require('./app')
const pool = require('./pool')

pool.connect({ // connecting to db
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'marcusslee95',
    password: ''
})
.then(() => {
    app().listen(3005, () => {
        console.log('Listening on port 3005')
    })
})
.catch((err) => console.error(err))

