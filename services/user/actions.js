import { FETCH_USER, FETCH_USER_FULFILLED, FETCH_USER_LIST, FETCH_USER_LIST_FULFILLED } from './actionTypes';

const fetchUser = name => ({ type: FETCH_USER, payload: name });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

const fetchUserList = since => ({ type: FETCH_USER_LIST, payload: since });
const fetchUserListFulfilled = payload => ({ type: FETCH_USER_LIST_FULFILLED, payload });

export { fetchUser, fetchUserFulfilled, fetchUserList, fetchUserListFulfilled };
