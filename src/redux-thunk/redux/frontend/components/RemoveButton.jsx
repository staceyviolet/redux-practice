import React           from 'react'
import { useSelector } from 'react-redux';
import './removeButton.css'

function RemoveButton({ itemId, onClick }) {
    const { id, loading } = useSelector(state => state.serviceRemove);

    return (
        <button onClick={onClick}>{loading && id === itemId ?
                                   <i className={'button-spinner fa fa-spinner'}/> : '✕'}</button>
    );
}

export default RemoveButton