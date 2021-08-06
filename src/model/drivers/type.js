let {
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Drivers',
    description: 'List of available drivers',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})