import {
    useNavigate
} from 'react-router';
import {
    CHANGE_SERVICE_FIELD,
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_FAILURE,
    ADD_SERVICE_SUCCESS,
    REMOVE_SERVICE_REQUEST,
    REMOVE_SERVICE_SUCCESS,
    REMOVE_SERVICE_FAILURE,
    FETCH_SERVICE_DETAILS_REQUEST,
    FETCH_SERVICE_DETAILS_FAILURE,
    FETCH_SERVICE_DETAILS_SUCCESS,
    SAVE_SERVICE_EDIT_REQUEST,
    SAVE_SERVICE_EDIT_SUCCESS,
    SAVE_SERVICE_EDIT_FAILURE, CHANGE_EDIT_FIELD
} from './actionTypes';

export const fetchServicesRequest = () => ({
    type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {
        error,
    },
});

export const fetchServicesSuccess = items => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {
        items,
    },
});

export const fetchServiceDetailsRequest = id => ({
    type: FETCH_SERVICE_DETAILS_REQUEST,
    payload: { id }
});

export const fetchServiceDetailsFailure = error => ({
    type: FETCH_SERVICE_DETAILS_FAILURE,
    payload: {
        error,
    },
});

export const fetchServiceDetailsSuccess = item => ({
    type: FETCH_SERVICE_DETAILS_SUCCESS,
    payload: {
        item,
    },
});

export const addServiceRequest = (name, price) => ({
    type: ADD_SERVICE_REQUEST,
    payload: {
        name,
        price,
    },
})

export const addServiceFailure = error => ({
    type: ADD_SERVICE_FAILURE,
    payload: {
        error,
    },
});

export const addServiceSuccess = () => ({
    type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({
    type: CHANGE_SERVICE_FIELD,
    payload: {
        name,
        value,
    },
});

export const changeEditField = (name, value) => ({
    type: CHANGE_EDIT_FIELD,
    payload: {
        name,
        value,
    },
});

export const removeServiceRequest = id => ({
    type: REMOVE_SERVICE_REQUEST,
    payload: {
        id,
    },
});

export const removeServiceSuccess = () => ({
    type: REMOVE_SERVICE_SUCCESS,

})

export const removeServiceFailure = error => ({
    type: REMOVE_SERVICE_FAILURE,
    payload: {
        error,
    },
});

export const saveServiceEditRequest = (id, name, price, content) => ({
    type: SAVE_SERVICE_EDIT_REQUEST,
    payload: {
        id, name, price, content
    },
});

export const saveServiceEditSuccess = () => ({
    type: SAVE_SERVICE_EDIT_SUCCESS,

})

export const saveServiceEditFailure = error => ({
    type: SAVE_SERVICE_EDIT_FAILURE,
    payload: {
        error,
    },
});

export const fetchServices = () => async (dispatch) => {
    dispatch(fetchServicesRequest());
    try {
        const response = await fetch(`http://localhost:7070/api/services`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchServicesSuccess(data));
    } catch (e) {
        dispatch(fetchServicesFailure(e.message));
    }
}

export const addService = () => async (dispatch, getState) => {
    dispatch(addServiceRequest());
    const { serviceAdd: { item: { name, price } } } = getState();

    try {
        const response = await fetch(`http://localhost:7070/api/services`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price }),
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(addServiceSuccess());
    } catch (e) {
        dispatch(addServiceFailure(e.message));
    }
    dispatch(fetchServices())
}

export const removeService = (id) => async (dispatch, getState) => {
    dispatch(removeServiceRequest());

    try {
        const response = await fetch(`http://localhost:7070/api/services/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(removeServiceSuccess());
    } catch (e) {
        dispatch(removeServiceFailure(e.message));
    }
    dispatch(fetchServices())
}

export const fetchServiceDetails = (id, navigate) => async (dispatch, getState) => {
    dispatch(fetchServiceDetailsRequest());
    try {
        const response = await fetch(`http://localhost:7070/api/services/${id}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchServiceDetailsSuccess(data));
        navigate(`/services/${id}`)

    } catch (e) {
        dispatch(fetchServiceDetailsFailure(e.message));
    }
}

export const saveServiceEdit = (id, name, price, content, navigate) => async (dispatch, getState) => {
    dispatch(saveServiceEditRequest());
    try {
        const response = await fetch(`http://localhost:7070/api/services`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name, price, content }),
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(saveServiceEditSuccess());
        navigate(`/services`)
    } catch (e) {
        dispatch(saveServiceEditFailure(e.message));
    }
}