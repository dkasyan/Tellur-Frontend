import {combineReducers} from 'redux'
import {History} from "history";
import {connectRouter, RouterState} from 'connected-react-router'
import modules from '../subsites'

const staticReducers = {}

let asyncReducers = {}

modules.map((module) => (
    asyncReducers = {...asyncReducers, ...module.reducers}
))

const rootReducer = (history: History) => combineReducers({
    ...staticReducers,
    ...asyncReducers,
    router: connectRouter(history)
})

// TODO Configure Saga Middleware
// export const sagaMiddleware = createSagaMiddleware();
//
// export default function configureStore() {
//     const store = createStore(createReducer(), applyMiddleware(sagaMiddleware));
//
//     store.asyncReducers = {};
//
//     store.injectReducer = (key, asyncReducer) => {
//         store.asyncReducers[key] = asyncReducer;
//         store.replaceReducer(createReducer(store.asyncReducers));
//     };
//
//     store.removeReducer = key => {
//         delete store.asyncReducers[key];
//         delete store.getState()[key];
//     };
//
//     return store;
// }

// TODO Think about automagic Redux State typing
export type State = {
    count: number
    router: RouterState
}

export default rootReducer