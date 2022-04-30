import React           from 'react'
import { useSelector } from 'react-redux';
import ServiceAdd      from './ServiceAdd';
import ServiceList     from './ServiceList';
import './reduxWithFetch.css'

function ServicesListAdd() {
    const { loading } = useSelector(state => state.serviceEdit)

    return (
        <div>
            {loading ? <i className={'form-spinner fa fa-spinner'}/>
                     : <ServiceAdd/>}
            <ServiceList/>
        </div>
    )
}

export default ServicesListAdd;