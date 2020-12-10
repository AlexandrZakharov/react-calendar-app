import {createStore, combineReducers} from 'redux';
import month from './reducers/months';

const reducers = combineReducers({month})
const store = createStore(reducers);
window.store = store;
export default store;