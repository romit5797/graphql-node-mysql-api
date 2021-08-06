const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLInt } = require('graphql')
const type = require('./type')
const Driver = require("./driver")

// Defines the queries
module.exports = {
drivers: {
    type: new GraphQLList(type),
    args: {
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        }
    },
    resolve: Driver.findMatching.bind(Driver)
},
driver: {
    type,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: Driver.getByID.bind(Driver)
}
}