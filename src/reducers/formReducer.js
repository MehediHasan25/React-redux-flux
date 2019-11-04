import { FORMDATA } from '../actions/formAction';

const initialState = {
    formDataResponse: {}
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORMDATA:
            return Object.assign({}, state, {
                formDataResponse: action.payload
            });

        default:
            return state;
    }
}

export default formReducer;