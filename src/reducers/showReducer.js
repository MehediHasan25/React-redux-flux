import { SHOWDATA } from './../actions/showAction';

const initialState = {
    showData: []
};

const showDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWDATA:
            return Object.assign({}, state, {
                showData: action.payload
            });
        default:
            return state;
    }
}

export default showDataReducer;