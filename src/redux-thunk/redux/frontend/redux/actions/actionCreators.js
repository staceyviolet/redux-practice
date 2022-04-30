import {
    CHANGE_SERVICE_FIELD,
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_FAILURE,
    ADD_SERVICE_SUCCESS,
    REMOVE_SERVICE,
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

export const removeService = id => ({
    type: REMOVE_SERVICE,
    payload: {
        id,
    },
});

export const fetchServices = async dispatch => {
    dispatch(fetchServicesRequest());
    try {
        const response = await fetch(`http://localhost:7070/api/services`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        dispatch(fetchServicesSuccess(data));
    } catch (e) {
        dispatch(fetchServicesFailure(e.message));
    }
}

export const addService = async (dispatch, name, price) => {
    dispatch(addServiceRequest());
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
    fetchServices(dispatch);
}