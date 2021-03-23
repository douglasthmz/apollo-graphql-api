import Comment from './CommentModel';
import { PubSub } from 'apollo-server';

const MESSAGE_CREATED = 'MESSAGE_CREATED';

const pubsub = new PubSub();

export async function saveComment(_, { input }) {
  const comment = await Comment.create(input);
  await pubsub.publish(MESSAGE_CREATED, { feedComments: comment });

  return comment;
}

export async function getComments() {
  const comments = await Comment.find();

  return comments;
}

export async function feedComments() {
  return pubsub.asyncIterator([MESSAGE_CREATED]);
}
