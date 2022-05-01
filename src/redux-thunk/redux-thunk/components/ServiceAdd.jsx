import React                               from 'react'
import { useSelector, useDispatch }        from 'react-redux';
import { addService, changeServiceField, } from '../globalState/actions/actionCreators';
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
        dispatch(addService());
    }

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }

    return (
        <form className={'service-add'} onSubmit={handleSubmit}>
            <label htmlFor={'name'}>Название</label>
            <input name="name" onChange={handleChange} value={item.name} disabled={loading}/>
            <label htmlFor={'price'}>Стоимость</label>
            <input name="price" onChange={handleChange} value={item.price} disabled={loading}/>
            <div>
                <button type="submit" disabled={loading} onClick={handleSubmit}>
                    {loading ?
                     <i className={"button-spinner fa fa-circle-o-notch fa-spin"}></i> : 'Сохранить'}
                </button>
                <button type="submit" onClick={handleCancel} disabled={loading}>Отменить</button>
            </div>
            {error && <p className={'service-add__error'}>Произошла ошибка!</p>}
        </form>
    );
}

export default ServiceAdd;