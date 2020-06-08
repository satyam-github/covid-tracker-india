import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getStateData = () => async dispatch => {
    try {
        dispatch({
            type: actionTypes.FETCH_STATES_START
        })
        // const res = await axios.get('https://cors-anywhere.herokuapp.com/https://covid-19india-api.herokuapp.com/v2.0/state_data');
        // console.log(res.data[1].state_data);
        // dispatch({
        //     type: actionTypes.FETCH_STATES_SUCCESS,
        //     stateData: res.data[1].state_data
        // })

        const res = await axios.get('https://api.covid19india.org/data.json');
        // console.log(res.data.cases_time_series);
        console.log(res.data.statewise);
        dispatch({
            type: actionTypes.FETCH_STATES_SUCCESS,
            stateData: res.data.statewise.filter(state => state.state !== 'State Unassigned'),
            countryTimeline: res.data.cases_time_series
        })

    } catch (err) {
        console.log(err);
        dispatch({
            type: actionTypes.FETCH_STATES_FAIL,
            error: err
        })
    }
}
