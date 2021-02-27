const pool = require('../pool')
const toCamelCase = require('../utils/to-camel-case')

class UsersRepository {
    static async findAll(){//purpose of async is to say this function could take a long time to execute so don't wait for this code to finish to do other stuff. Just keep doing your stuff and when we get back result we'll send it over to you
        const result = await pool.query('SELECT * FROM users') // purpose of this await is to say before running code below wait for this to finish

        return toCamelCase(result.rows)
    }

    static async findById(){

    }

    static async findById(){

    }

    static async findById(){

    }

    static async findById(){

    }

    static async findById(){

    }
}

module.exports = UsersRepository