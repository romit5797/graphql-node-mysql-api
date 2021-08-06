const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
} = require('graphql')
const type = require('./type')
const Driver = require('./driver')

// Defines the mutations
module.exports = {
    addDriver: {
        type,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            age : { type: new GraphQLNonNull(GraphQLInt) },
            email:   { type: new GraphQLNonNull(GraphQLString) },
            phone:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Driver.createEntry.bind(Driver)
    },
    updateDriver: {
        type,
        args: {
            id:     { type: GraphQLID },
            name: { type: new GraphQLNonNull(GraphQLString) },
            age : { type: new GraphQLNonNull(GraphQLInt) },
            email:   { type: new GraphQLNonNull(GraphQLString) },
            phone:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Driver.updateEntry.bind(Driver)
    }
}
