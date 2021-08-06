const DAO = require('../../lib/databaseOperations')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Order extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'orders'
    }

    /**
     * Returns a order by its ID
     */
    static async getByID(_, {id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of orders matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all orders if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching orders
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new order
     */
    static async createEntry(_, {type, price}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    origin,
                    destination,
                    deliveryDate
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a order 
     */
    static async updateEntry(_, {id, type, price}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    origin,
                    destination,
                    deliveryDate
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Order