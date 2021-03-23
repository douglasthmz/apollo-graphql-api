import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'OnlineType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    status: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});
