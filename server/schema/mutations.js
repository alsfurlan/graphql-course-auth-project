const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = require('./types/user_type');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args, request) {
        
      }
    },
  },
});