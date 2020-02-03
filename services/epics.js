import { combineEpics } from 'redux-observable';
import { fetchUserEpic, fetchUserListEpic } from './user/epic';

const rootEpic = combineEpics(fetchUserEpic, fetchUserListEpic);

export { rootEpic };
