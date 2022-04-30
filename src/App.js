import React                       from 'react';
import { Provider }                from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter, Router }   from 'react-router-dom';
import ServicesListAdd             from './redux-thunk/redux/frontend/components/ServicesListAdd';
import ServicesListEdit            from './redux-thunk/redux/frontend/components/ServicesListEdit';
import store                       from './redux-thunk/redux/frontend/redux/store';
import RepairServices              from './redux/components/ServiceList/RepairServices';
import '../src/assets/fontawesome-free-6.1.1-web/css/all.css'

function App() {
    return (
        <BrowserRouter>
            {/*<RepairServices />*/}
            <Provider store={store}>
                <Routes>
                    <Route path={'/services'} element={<ServicesListAdd/>}/>
                    <Route path={'/services/:id'} element={<ServicesListEdit/>}/>
                    <Route path={'/'} element={<Navigate to={'/services'}/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
