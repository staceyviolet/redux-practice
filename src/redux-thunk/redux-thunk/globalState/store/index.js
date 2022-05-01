import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import serviceEditReducer                                from '../reducers/serviceEdit';
import serviceListReducer               from '../reducers/serviceList';
import serviceAddReducer                from '../reducers/serviceAdd';
import serviceRemoveReducer             from '../reducers/serviceRemove';
import serviceSaveReducer               from '../reducers/serviceSave';
import thunk from 'redux-thunk';

const reducer = combineReducers({
                                    serviceList: serviceListReducer,
                                    serviceAdd: serviceAddReducer,
                                    serviceRemove: serviceRemoveReducer,
                                    serviceEdit: serviceEditReducer,
                                    serviceSave: serviceSaveReducer
                                });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;
