import React           from 'react'
import { useSelector } from 'react-redux';
import ServiceEdit     from './ServiceEdit';
import ServiceList     from './ServiceList';
import './reduxWithFetch.css'

function ServicesListEdit() {
    const { loading } = useSelector(state => state.serviceEdit)
    const { item } = useSelector(state => state.serviceEdit);
    return (
        <div>
            {loading && <i className={'form-spinner fa fa-spinner'}/>}
            {!loading && <ServiceEdit item={item}/>}
            <ServiceList/>
        </div>
    )
}

export default ServicesListEdit;