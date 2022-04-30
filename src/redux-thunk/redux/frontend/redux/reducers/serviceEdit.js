import {
    FETCH_SERVICE_DETAILS_REQUEST,
    FETCH_SERVICE_DETAILS_FAILURE,
    FETCH_SERVICE_DETAILS_SUCCESS, CHANGE_EDIT_FIELD,
} from '../actions/actionTypes'

const initialState = {
    item: { name: '', price: '', content: '' },
    loading: false,
    error: null,
};

export default function serviceEditReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SERVICE_DETAILS_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case FETCH_SERVICE_DETAILS_SUCCESS:
            const { item } = action.payload;
            return {
                ...state, item, loading: false, error: null,
            };
        case CHANGE_EDIT_FIELD:
            const { name, value } = action.payload;
            return {
                ...state,
                item: {
                    ...state.item,
                    [name]: value,
                }
            };
        default:
            return state;
    }
}