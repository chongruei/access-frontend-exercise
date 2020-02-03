import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FETCH_USER, FETCH_USER_LIST } from './actionTypes';
import { fetchUserFulfilled, fetchUserListFulfilled } from './actions';

const fetchUserListEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER_LIST),
    mergeMap(action =>
      ajax
        .getJSON(`https://api.github.com/users?per_page=20&since=${action.payload}`)
        .pipe(map(response => fetchUserListFulfilled(response))),
    ),
  );

const fetchUserEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => fetchUserFulfilled(response))),
    ),
  );

export { fetchUserListEpic, fetchUserEpic };
