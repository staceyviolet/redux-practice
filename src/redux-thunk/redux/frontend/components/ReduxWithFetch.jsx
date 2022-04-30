import React, { useState } from 'react'
import { Provider }        from 'react-redux';
import store               from '../redux/store';
import ServiceAdd          from './ServiceAdd';
import ServiceList         from './ServiceList';

function ReduxWithFetch() {
    const [item, setItem] = useState({ name: '', price: '' })

    return (
        <Provider store={store}>
            <>
                <ServiceAdd/>
                <ServiceList handleEdit={setItem}/>
            </>
        </Provider>
    )
}

export default ReduxWithFetch;