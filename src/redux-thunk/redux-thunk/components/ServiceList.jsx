import React, { useEffect }                                  from 'react'
import { useSelector, useDispatch }                          from 'react-redux';
import { useNavigate }                                       from 'react-router';
import { fetchServiceDetails, fetchServices, removeService } from '../globalState/actions/actionCreators';
import './serviceList.css'
import ActionButtons                                         from './ActionButtons';

function ServiceList(props) {
    const { items, loading, error } = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    const handleRemove = (id) => {
        dispatch(removeService(id));
    }

    const navigate = useNavigate()

    const handleEdit = (id) => {
        dispatch(fetchServiceDetails(id, navigate));
    }

    if (loading) {
        return <i className={'spinner fa fa-circle-o-notch fa-spin fa-2xl'}></i>;
    }

    if (error) {
        return <p className={'service-list__error'}>Произошла ошибка!</p>;
    }

    return (
        <ul className={'service-list'}>
            {items.map(o => (
                <li key={o.id}>
                    {o.name}: {o.price}
                    <ActionButtons itemId={o.id}
                                   onRemove={() => handleRemove(o.id)}
                                   onEdit={() => handleEdit(o.id)}/>
                </li>
            ))}
        </ul>
    );
}

export default ServiceList