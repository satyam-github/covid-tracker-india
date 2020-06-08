import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getResources = () => async dispatch => {
    try {

        dispatch({
            type: actionTypes.FETCH_CONTACTS_START
        })
        const res = await axios.get('https://api.covid19india.org/resources/resources.json');
        console.log(res.data.resources);
        dispatch({
            type: actionTypes.FETCH_CONTACTS_SUCCESS,
            resources: res.data.resources
        })

    } catch(err) {
        console.log(err);
        dispatch({
            type: actionTypes.FETCH_CONTACTS_FAIL,
            error: "Unable to get contacts"
        })
    }
}
