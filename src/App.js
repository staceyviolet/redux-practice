import React          from 'react';
import ReduxThunk     from './redux-thunk/redux-thunk/frontend/components/ReduxThunk';
import ReduxWithFetch from './redux-thunk/redux/frontend/components/ReduxWithFetch';
import RepairServices from './redux/components/ServiceList/RepairServices';

function App() {
    return (
        <>
            {/*PREV HOMEWORK*/}
            {/*<RepairServices />*/}

            {/*CURRENT HOMEWORK*/}
            <ReduxWithFetch/>
            {/*<ReduxThunk/>*/}
        </>
    );
}

export default App;
