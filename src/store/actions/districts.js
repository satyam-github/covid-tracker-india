import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getDistricts = (stateName) => async dispatch => {
    
    try {
        dispatch({
            type: actionTypes.FETCH_DISTRICTS_START
        });
        console.log(stateName);
        const res = await axios.get('https://api.covid19india.org/state_district_wise.json');
        // console.log(Object.entries(res.data[stateName].districtData).map(district => (
        //     district[1].confirmed
        // ))); 
        console.log(res.data[stateName].districtData);
        dispatch(getDistrictZones(stateName));
        dispatch({
            type: actionTypes.FETCH_DISTRICTS_SUCCESS,
            districtData: res.data[stateName].districtData
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: actionTypes.FETCH_DISTRICTS_FAIL,
            error: err
        })
    }
}

const getDistrictZones = (stateName) => async dispatch => {
    try {
        dispatch({
            type: actionTypes.FETCH_DISTRICT_ZONES_START
        })
        const res = await axios.get('https://api.covid19india.org/zones.json');
        const stateData = res.data.zones.filter(city => city.state === stateName);
        console.log(stateData);
        let districtZones = {};
        stateData.forEach(element => {
            districtZones[element.district] = element.zone;
        });
        console.log(districtZones);
        dispatch({
            type: actionTypes.FETCH_DISTRICT_ZONES_SUCCESS,
            districtZones: districtZones
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: actionTypes.FETCH_DISTRICT_ZONES_FAIL,
            error: err
        })
    }
}

export const getStateTimeline = (stateName) => async dispatch => {

    try {
        dispatch({
            type: actionTypes.FETCH_STATE_TIMELINE_START
        });
        const res = await axios.get('https://api.rootnet.in/covid19-in/stats/history');
        // console.log(res.data.data);
        let stateTimeline = [];
        const stateData = res.data.data.filter(temp => temp.regional.find(region => region.loc === stateName));
        // console.log("stateData: ", stateData);
        stateTimeline = stateData.map(temp => {
            let stateData = temp.regional.find(region => region.loc === stateName);
            stateData.day = temp.day;
            return stateData;
        })
        // console.log(stateTimeline);
        dispatch({
            type: actionTypes.FETCH_STATE_TIMELINE_SUCCESS,
            stateTimeline: stateTimeline
        });
    } catch (err) {
        dispatch({
            type: actionTypes.FETCH_STATE_TIMELINE_FAIL,
            error: err
        })
        console.log(err);
    }

}







