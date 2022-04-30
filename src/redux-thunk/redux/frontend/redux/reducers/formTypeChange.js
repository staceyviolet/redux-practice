import {
    SHOW_EDIT_FORM, SHOW_ADD_FORM,
} from '../actions/actionTypes'

const initialState = {
    showEdit: false,
    showAdd: true
};

export default function formTypeChangeReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ADD_FORM:
            return {
                ...state,
                showEdit: false,
                showAdd: true
            };
        case SHOW_EDIT_FORM:
            return {
                ...state,
                showEdit: true,
                showAdd: false
            };

        default:
            return state;
    }
}