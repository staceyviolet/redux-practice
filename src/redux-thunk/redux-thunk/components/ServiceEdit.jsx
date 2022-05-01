import React                                from 'react'
import { useSelector, useDispatch }         from 'react-redux';
import { useNavigate }                      from 'react-router';
import { changeEditField, saveServiceEdit } from '../globalState/actions/actionCreators';
import './serviceAdd.css'

function ServiceEdit({ item }) {
    const { loading, error } = useSelector(state => state.serviceSave);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeEditField(name, value));
    };

    const navigate = useNavigate();

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(saveServiceEdit( item.id, item.name, item.price, item.content, navigate));
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate('/services')
    }

    return (
        <form className={'service-add'} onSubmit={handleSubmit}>
            <label htmlFor={'name'}>Название</label>
            <input name="name" onChange={handleChange} value={item.name} disabled={loading}/>
            <label htmlFor={'price'}>Стоимость</label>
            <input name="price" onChange={handleChange} value={item.price} disabled={loading}/>
            <label htmlFor={'price'}>Описание</label>
            <input name="content" onChange={handleChange} value={item.content} disabled={loading}/>
            <div>
                <button type="submit" disabled={loading}>
                    {loading ?
                     <i className={"button-spinner fa fa-circle-o-notch fa-spin"}></i> : 'Сохранить'}
                </button>
                <button type="submit" disabled={loading} onClick={handleCancel}>Отменить</button>
            </div>
            {error && <p className={'service-add__error'}>Произошла ошибка!</p>}
        </form>
    );
}

export default ServiceEdit;