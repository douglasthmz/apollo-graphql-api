import { subscriptions } from './comments';
import { subscriptions as onlineSubscriptions } from './online';

export default {
  ...subscriptions,
  ...onlineSubscriptions,
};
