import { inputFormApi } from '../services/InputForm';


export const FORMDATA = 'FORMDATA';


export const inputFormSuccess = data => {
    return {
        type: FORMDATA,
        payload: data
    }
}




export const inputRequest = (data, history) => {
    return async (dispatch) => {

        try {
            let res = await inputFormApi(data);
            dispatch(inputFormSuccess(res.data));
            history.push('/posts');
        } catch (error) {
            dispatch(inputFormSuccess(error));
        }
    }
}