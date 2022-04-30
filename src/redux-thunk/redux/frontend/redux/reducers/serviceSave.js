import {
    SAVE_SERVICE_EDIT_REQUEST, SAVE_SERVICE_EDIT_FAILURE, SAVE_SERVICE_EDIT_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    loading: false, error: null,
};

export default function serviceSaveReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SERVICE_EDIT_REQUEST:
            return {
                ...state, loading: true, error: null,
            };
        case SAVE_SERVICE_EDIT_FAILURE:
            const { error } = action.payload;
            return {
                ...state, loading: false, error,
            };
        case SAVE_SERVICE_EDIT_SUCCESS:
            return { ...initialState };

        default:
            return state;
    }
}