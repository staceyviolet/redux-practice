import React                       from 'react';
import { useSelector }             from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ServiceAdd        from './ServiceAdd';
import ServiceEdit       from './ServiceEdit';
import ServiceList       from './ServiceList';
import './reduxThunk.css'

function RepairServicesApp() {
    const { item } = useSelector(state => state.serviceEdit)
    const { loading } = useSelector(state => state.serviceEdit)
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/services'} element={loading ? <i className={"spinner fa fa-circle-o-notch fa-spin fa-2xl"}></i>
                                                           : <ServiceAdd/>}/>
                <Route path={'/services/:id'} element={<ServiceEdit item={item}/>}/>
                <Route path={'/'} element={<Navigate to={'/services'}/>}/>
            </Routes>
            <ServiceList/>
        </BrowserRouter>
    );
}

export default RepairServicesApp;
