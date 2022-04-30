import React                     from 'react'
import { useSelector } from 'react-redux';
import ServiceAdd                from './ServiceAdd';
import ServiceEdit               from './ServiceEdit';
import ServiceList               from './ServiceList';
import './reduxWithFetch.css'

function ReduxWithFetch() {
    const { showEdit, showAdd } = useSelector(state => state.formType);
    const { loading } = useSelector(state => state.serviceEdit)

    return (

        <div>
            {loading && <i className={'form-spinner fa fa-spinner'}/>}
            {!loading && showAdd && <ServiceAdd/>}
            {!loading && showEdit && <ServiceEdit/>}
            <ServiceList/>
        </div>
    )
}

export default ReduxWithFetch;