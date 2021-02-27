const pool = require('../pool')

class UsersRepository {
    static async findAll(){//purpose of async is to say this function could take a long time to execute so don't wait for this code to finish to do other stuff. Just keep doing your stuff and when we get back result we'll send it over to you
        const result = await pool.query('SELECT * FROM users') // purpose of this await is to say before running code below wait for this to finish

        //making column names like 'created_at' camelCase aka. 'createdAt'
        const parsedRows = result.rows.map((row) => {
            const rowWithCorrectCasing = {}

            for (let key in row){
                const camelCase = key.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace('_', '')
                )
                rowWithCorrectCasing[camelCase] = row[key]
            }

            return rowWithCorrectCasing
        })

        return parsedRows
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