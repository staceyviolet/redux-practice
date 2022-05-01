import React           from 'react'
import { useSelector } from 'react-redux';
import './removeButton.css'

function RemoveButton({ itemId, onClick }) {
    const { id, loading } = useSelector(state => state.serviceRemove);

    return (
        <button onClick={onClick}>{loading && id === itemId ?
                                   <div id={'button_spinner'}></div> : '✕'}</button>
    );
}

export default RemoveButton