import React, { useEffect }             from 'react'
import { useSelector, useDispatch }     from 'react-redux';
import { fetchServices, removeService } from '../redux/actions/actionCreators';
import './serviceList.css'

function ServiceList({ handleEdit }) {
    const { items, loading, error } = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchServices(dispatch);
    }, [dispatch])

    const handleRemove = id => {
        dispatch(removeService(id));
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong try again</p>;
    }

    return (
        <ul className={'service-list'}>
            {items.map(o => (
                <li key={o.id}>
                    {o.name}: {o.price}
                    <div>
                        <button onClick={() => handleRemove(o.id)}>✕</button>
                        <button onClick={() => { handleEdit(o) }}>✎</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ServiceList