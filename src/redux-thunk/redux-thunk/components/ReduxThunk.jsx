import React             from 'react';
import { Provider } from 'react-redux';
import store        from '../globalState/store';
import './reduxThunk.css'
import RepairServicesApp from './RepairServicesApp';

function ReduxThunk() {
    return (
        <Provider store={store}>
            <RepairServicesApp/>
        </Provider>
    );
}

export default ReduxThunk;
