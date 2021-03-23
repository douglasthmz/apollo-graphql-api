import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';
import OnlineType from './OnlineType';
import {
  getOnline,
  saveOnline,
  updateOnline,
  createdOnline,
  updatedOnline,
} from './OnlineLoader';

export const queries = {
  onlines: {
    type: GraphQLList(OnlineType),
    resolve: getOnline,
  },
};

export const mutations = {
  saveOnline: {
    type: OnlineType,
    resolve: saveOnline,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'OnlineInput',
          fields: {
            name: {
              type: GraphQLString,
            },
            status: {
              type: GraphQLBoolean,
            },
          },
        }),
      },
    },
  },
  updateOnline: {
    type: OnlineType,
    resolve: updateOnline,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
  },
};

export const subscriptions = {
  createdOnline: {
    type: OnlineType,
    subscribe: createdOnline,
  },
  updatedOnline: {
    type: OnlineType,
    subscribe: updatedOnline,
  },
};
