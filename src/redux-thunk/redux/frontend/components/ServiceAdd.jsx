import React                              from 'react'
import { useSelector, useDispatch }       from 'react-redux';
import { addService, changeServiceField } from '../redux/actions/actionCreators';
import './serviceAdd.css'

function ServiceAdd() {
    const { item, loading, error } = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addService(dispatch, item.name, item.price);
    }

    return (
        <form className={'service-add'} onSubmit={handleSubmit}>
            <label htmlFor={'name'}>Название</label>
            <input name="name" onChange={handleChange} value={item.name}/>
            <label htmlFor={'price'}>Стоимость</label>
            <input name="price" onChange={handleChange} value={item.price}/>
            <div>
                <button type="submit" disabled={loading}>Сохранить</button>
                <button type="submit" disabled={loading}>Отменить</button>
            </div>
            {error && <p>Something went wrong try again</p>}
        </form>
    );
}

export default ServiceAdd;