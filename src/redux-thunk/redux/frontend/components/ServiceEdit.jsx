import React                              from 'react'
import { useSelector, useDispatch }                         from 'react-redux';
import { changeServiceField, saveServiceEdit, showAddForm } from '../redux/actions/actionCreators';
import './serviceAdd.css'

function ServiceEdit() {
    const { item, loading, error } = useSelector(state => state.serviceEdit);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        saveServiceEdit(dispatch, item.id, item.name, item.price, item.description);
    }

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(showAddForm())
    }

    return (
        <form className={'service-add'} onSubmit={handleSubmit}>
            <label htmlFor={'name'}>Название</label>
            <input name="name" onChange={handleChange} value={item.name}/>
            <label htmlFor={'price'}>Стоимость</label>
            <input name="price" onChange={handleChange} value={item.price}/>
            <label htmlFor={'price'}>Описание</label>
            <input name="content" onChange={handleChange} value={item.content}/>
            <div>
                <button type="submit" disabled={loading}>Сохранить</button>
                <button type="submit" disabled={loading} onClick={handleCancel}>Отменить</button>
            </div>
            {error && <p className={'service-add__error'}>Something went wrong try again</p>}
        </form>
    );
}

export default ServiceEdit;