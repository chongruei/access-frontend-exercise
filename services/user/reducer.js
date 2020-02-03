import { FETCH_USER_FULFILLED, FETCH_USER_LIST_FULFILLED } from './actionTypes';

const initialState = {
  users: [],
  singleUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_FULFILLED:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        singleUser: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
