const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Order = require('./order')

// Defines the mutations
module.exports = {
    addOrder: {
        type,
        args: {
            origin:   { type: new GraphQLNonNull(GraphQLString) },
            destination:  { type: new GraphQLNonNull(GraphQLString) },
            deliveryDate:   { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Order.createEntry.bind(Order)
    },
    updateOrder: {
        type,
        args: {
            id:     { type: GraphQLID },
            origin:   { type: new GraphQLNonNull(GraphQLString) },
            destination:  { type: new GraphQLNonNull(GraphQLString) },
            deliveryDate:   { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Order.updateEntry.bind(Order)
    }
}
