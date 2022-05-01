import React, { useEffect }                                  from 'react'
import { useSelector, useDispatch }                          from 'react-redux';
import { useNavigate }                                       from 'react-router';
import { fetchServiceDetails, fetchServices, removeService } from '../globalState/actions/actionCreators';
import './serviceList.css'
import RemoveButton                                          from './RemoveButton';

function ServiceList(props) {
    const { items, loading, error } = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchServices(dispatch);
    }, [dispatch])

    const handleRemove = id => {
        dispatch(removeService(dispatch, id));
    }

    const navigate = useNavigate()

    const handleEdit = id => {
        dispatch(fetchServiceDetails(dispatch, id, navigate));
    }

    if (loading) {
        return <div id={'spinner'}></div>;
    }

    if (error) {
        return <p className={'service-list__error'}>Произошла ошибка!</p>;
    }

    return (
        <ul className={'service-list'}>
            {items.map(o => (
                <li key={o.id}>
                    {o.name}: {o.price}
                    <div>
                        <RemoveButton itemId={o.id} onClick={() => handleRemove(o.id)}/>
                        <button onClick={() => { handleEdit(o.id) }}>✎</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ServiceList