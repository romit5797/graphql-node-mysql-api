const { GraphQLObjectType } = require('graphql')
const driverMutation = require('../model/drivers/mutations')
const orderMutation = require('../model/orders/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addDriver: driverMutation.addDriver,
        updateDriver: driverMutation.updateDriver,
        addOrder: orderMutation.addOrder,
        updateOrder: orderMutation.updateOrder
    }
})