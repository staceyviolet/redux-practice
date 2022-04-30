import React          from 'react';
import { Provider }   from 'react-redux';
import ReduxWithFetch from './redux-thunk/redux/frontend/components/ReduxWithFetch';
import ServiceAdd     from './redux-thunk/redux/frontend/components/ServiceAdd';
import ServiceList    from './redux-thunk/redux/frontend/components/ServiceList';
import store          from './redux-thunk/redux/frontend/redux/store';
import RepairServices from './redux/components/ServiceList/RepairServices';

function App() {
  return (
    <div>
      {/*<RepairServices />*/}
        <ReduxWithFetch />
    </div>
  );
}

export default App;
