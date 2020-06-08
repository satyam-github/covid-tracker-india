import * as actionTypes from '../actions/actionTypes';

const initialState = {
    districtData: null,
    distictZones: null,
    districtDataLoaded: false,
    districtDataError: null,
    districtZonesLoaded: false,
    districtZonesError: null
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_DISTRICTS_START :
            return {
                ...state,
                districtDataLoaded: false
            }
        case actionTypes.FETCH_DISTRICTS_SUCCESS :
            return {
                ...state,
                districtDataLoaded: true,
                districtData: action.districtData,
                districtDataError: null
            }
        case actionTypes.FETCH_DISTRICTS_FAIL :
            return {
                ...state,
                districtDataLoaded: true,
                districtDataError: action.error
            }
        case actionTypes.FETCH_DISTRICT_ZONES_START :
            return {
                ...state,
                districtZonesLoaded: false
            }
        case actionTypes.FETCH_DISTRICT_ZONES_SUCCESS :
            return {
                ...state,
                districtZones: action.districtZones,
                districtZonesLoaded: true,
                districtZonesError: null
            }
        case actionTypes.FETCH_DISTRICT_ZONES_FAIL :
            return {
                ...state,
                districtZonesLoaded: true,
                districtZonesError: action.error
            }
        default: 
            return state
    }
}

export default reducer;