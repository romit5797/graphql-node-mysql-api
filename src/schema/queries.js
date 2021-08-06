const { GraphQLObjectType } = require('graphql')
const driverQueries = require('../model/drivers/queries')
const orderQueries = require('../model/orders/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        driver: driverQueries.driver,
        drivers: driverQueries.drivers,
        order: orderQueries.order,
        orders: orderQueries.orders
    }
})