let {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Orders',
    description: 'List of available orderss',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        origin: {
            type: new GraphQLNonNull(GraphQLString)
        },
        destination: {
            type: new GraphQLNonNull(GraphQLString)
        },
        deliveryDate: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})