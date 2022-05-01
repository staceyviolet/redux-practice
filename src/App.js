import React          from 'react';
import ReduxThunk     from './redux-thunk/redux-thunk/components/ReduxThunk';
import ReduxWithFetch from './redux-thunk/redux/components/ReduxWithFetch';
import RepairServices from './redux/components/ServiceList/RepairServices';
import '../src/assets/font-awesome-4.7.0/css/font-awesome.css'

function App() {
    return (
        <>
            {/*REDUX | REDUX TOOLKIT*/}
            {/*<RepairServices />*/}

            {/*REDUX | REDUX THUNK*/}
            <ReduxWithFetch/>
            {/*<ReduxThunk/>*/}
        </>
    );
}

export default App;
