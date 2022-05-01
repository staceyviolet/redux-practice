import React             from 'react';
import { Provider }      from 'react-redux';
import store             from '../redux/store';
import './reduxWithFetch.css'
import RepairServicesApp from './RepairServicesApp';

function ReduxWithFetch() {
    return (
        <Provider store={store}>
            <RepairServicesApp/>
        </Provider>
    );
}

export default ReduxWithFetch;
