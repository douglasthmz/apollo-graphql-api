import { mutations } from './comments';
import { mutations as onlineMutations } from './online';

export default {
  ...mutations,
  ...onlineMutations,
};
