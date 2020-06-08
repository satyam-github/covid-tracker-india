import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stateTimelineData: null,
    stateTimelineLoaded: false,
    stateTimelineError: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_STATE_TIMELINE_START :
            return {
                ...state,
                stateTimelineLoaded: false
            }
        case actionTypes.FETCH_STATE_TIMELINE_SUCCESS :
            return {
                ...state,
                stateTimelineData: action.stateTimeline,
                stateTimelineLoaded: true,
                stateTimelineError: null
            }
        case actionTypes.FETCH_STATE_TIMELINE_FAIL :
            return {
                ...state,
                stateTimelineLoaded: false,
                stateTimelineError: action.error
            }
        default:
            return state;
    }
}

export default reducer;