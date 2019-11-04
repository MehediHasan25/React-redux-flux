import { showDataApi } from '../services/InputForm';

export const SHOWDATA = 'SHOWDATA';


export const showDataSuccess = data => {
    return {
        type: SHOWDATA,
        payload: data
    }
}


export const showData = () => {
    return async (dispatch) => {
        try {
            let res = await showDataApi();
            dispatch(showDataSuccess(res.data));
        } catch (error) {
            dispatch(showDataSuccess(error));
        }
    }
}