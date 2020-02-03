import { createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { rootEpic } from './epics';
import { rootReducer } from './reducers';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));

epicMiddleware.run(rootEpic);

export { store };
