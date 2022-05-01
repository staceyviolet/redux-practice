import React           from 'react'
import { useSelector } from 'react-redux';

function ActionButtons({ itemId, onEdit, onRemove }) {
    const { id, loading } = useSelector(state => state.serviceRemove);

    if (loading && id === itemId) {
        return <button disabled><i className={'button-spinner fa fa-circle-o-notch fa-spin'}></i></button>
    }

    return (
        <div>
            <button onClick={onRemove}>✕</button>
            <button onClick={onEdit}>✎</button>
        </div>
    );
}

export default ActionButtons