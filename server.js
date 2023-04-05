const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World from GraphQL'
            }
        })
    })
});

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));
app.listen(3000, () => console.log('Server is running on port 3000'));