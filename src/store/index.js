import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceItemReducer from '../reducers/serviceItem';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceSaveItemEditedReducer from '../reducers/serviceSaveItemEdited';
import serviceRemoveReducer from '../reducers/serviceRemove';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceRemove: serviceRemoveReducer,
  serviceItem: serviceItemReducer,
  serviceSaveItemEdited: serviceSaveItemEditedReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
