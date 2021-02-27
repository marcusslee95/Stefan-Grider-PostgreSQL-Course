const pg = require('pg')

// //Normal way of creating a pool (we didn't do this because we wanted to make it easy to connect to multiple dbs in our app)
// const pool = new pg.Pool({
//     host: 'localhost',
//     port: 5432
// })

// module.exports = pool;

class Pool {
    _pool = null

    connect(options){
        this._pool = new pg.Pool(options)
    }

}

module.exports = new Pool()