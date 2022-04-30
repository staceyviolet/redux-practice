import * as React        from 'react'
import { ServiceList }   from "./ServiceList";
import { ServiceAdd }    from "./ServiceAdd";
import { Provider }      from 'react-redux';
import { useState }      from 'react';
import store             from '../../rtkstore/store';
import { ServiceSearch } from './ServiceSearch';

export default function RepairServices() {
    const [item, setItem] = useState({ name: '', price: '' })

    return (
        <Provider store={store}>
            <ServiceSearch />
            <ServiceAdd item={item} setItem={setItem}/>
            <ServiceList handleEdit={setItem} />
        </Provider>
    )
}