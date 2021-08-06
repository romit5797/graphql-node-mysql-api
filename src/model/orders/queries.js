const { GraphQLList,
        GraphQLID,
        GraphQLString} = require('graphql')
const type = require('./type')
const Order = require("./order")

// Defines the queries
module.exports = {
    orders: {
        type: new GraphQLList(type),
        args: {
            origin: {
                type: GraphQLString
            },
            destination: {
                type: GraphQLString
            },
            deliveryDate: {
                type: GraphQLString
            }
        },
        resolve: Order.findMatching.bind(Order)
    },
    order: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Order.getByID.bind(Order)
    }
}