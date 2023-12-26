const graphql = require('graphql');
const UserType = require('./user_type');
const { GraphQLObjectType, GraphQLList } = graphql;
const User = require('../../models/user');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },
  },
});

module.exports = RootQueryType;
