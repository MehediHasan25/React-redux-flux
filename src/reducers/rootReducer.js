import { combineReducers } from 'redux';
import FormReducer from './formReducer';
import ShowReducer from './showReducer';

const rootReducer = combineReducers({
    form: FormReducer,
    show: ShowReducer
});

export default rootReducer;