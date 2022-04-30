import React          from 'react';
import { Provider }   from 'react-redux';
import ReduxWithFetch from './redux-thunk/redux/frontend/components/ReduxWithFetch';
import store          from './redux-thunk/redux/frontend/redux/store';
import RepairServices from './redux/components/ServiceList/RepairServices';
import '../src/assets/fontawesome-free-6.1.1-web/css/all.css'

function App() {
    return (
        <div>
            {/*<RepairServices />*/}
            <Provider store={store}>
                <ReduxWithFetch/>
            </Provider>
        </div>
    );
}

export default App;
