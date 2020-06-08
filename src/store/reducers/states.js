import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stateData: [],
    countryTimeline: [],
    loaded: false,
    error: null
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_STATES_START :
            return {
                ...state,
                loaded: false
            }
        case actionTypes.FETCH_STATES_SUCCESS :
            return {
                ...state,
                stateData: action.stateData,
                countryTimeline: action.countryTimeline,
                loaded: true
            }
        case actionTypes.FETCH_CONTACTS_FAIL :
            return {
                ...state,
                error: action.error,
                loaded: true
            }
        default: 
            return state;
    }
}

export default reducer;