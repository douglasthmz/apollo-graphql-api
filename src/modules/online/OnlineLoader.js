import Online from './OnlineModel';
import { PubSub } from 'apollo-server';

const ONLINE_CREATED = 'ONLINE_CREATED';
const ONLINE_UPDATED = 'ONLINE_UPDATED';

const pubsub = new PubSub();

export async function saveOnline(_, { input }) {
  const online = await Online.create(input);
  await pubsub.publish(ONLINE_CREATED, { createdOnline: online });

  return online;
}

export async function getOnline() {
  const onlines = await Online.find({ status: true });

  return onlines;
}

export async function updateOnline(_, { id }) {
  const online = await Online.findById(id);

  online.status = false;
  online.save();

  await pubsub.publish(ONLINE_UPDATED, { updatedOnline: online });

  return online;
}

export async function createdOnline() {
  return pubsub.asyncIterator([ONLINE_CREATED]);
}

export async function updatedOnline() {
  return pubsub.asyncIterator([ONLINE_UPDATED]);
}
