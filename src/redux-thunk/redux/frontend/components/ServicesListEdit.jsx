import React           from 'react'
import { useSelector } from 'react-redux';
import ServiceEdit     from './ServiceEdit';
import ServiceList     from './ServiceList';
import './reduxWithFetch.css'

function ServicesListEdit() {
    const { item } = useSelector(state => state.serviceEdit)

    return (
        <div>
            <ServiceEdit item={item}/>
            <ServiceList/>
        </div>
    )
}

export default ServicesListEdit;