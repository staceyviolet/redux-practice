import { createStore, combineReducers } from 'redux';
import serviceEditReducer               from '../reducers/serviceEdit';
import serviceListReducer               from '../reducers/serviceList';
import serviceAddReducer                from '../reducers/serviceAdd';
import serviceRemoveReducer             from '../reducers/serviceRemove';
import serviceSaveReducer               from '../reducers/serviceSave';

const reducer = combineReducers({
                                    serviceList: serviceListReducer,
                                    serviceAdd: serviceAddReducer,
                                    serviceRemove: serviceRemoveReducer,
                                    serviceEdit: serviceEditReducer,
                                    serviceSave: serviceSaveReducer
                                });

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
