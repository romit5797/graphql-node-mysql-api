const DAO = require('../../lib/databaseOperations')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Driver extends DAO {

    static get TABLE_NAME() {
        return 'drivers'
    }

    static async getByID(_, {id}) {
        return await this.find(id)
    }

    static async findMatching(_, fields) {
        // Returns early with all drivers if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching bacons
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new driver
     */
    static async createEntry(_, {name, age, email, phone}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    name,
                    age,
                    email,
                    phone
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a driver
     */
    static async updateEntry(_, {id, name, age, email, phone}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    name, 
                    age, 
                    email, 
                    phone
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Driver