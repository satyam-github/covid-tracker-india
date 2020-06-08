import * as actionTypes from '../actions/actionTypes';

const initialState = {
    resources: [],
    loaded: false,
    error: null
}; 

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS_START :
            return {
                ...state,
                loaded: false
            }
        case actionTypes.FETCH_CONTACTS_SUCCESS :
            return {
                ...state,
                resources: action.resources,
                loaded: true
            }
        case actionTypes.FETCH_CONTACTS_FAIL :
            return {
                ...state,
                error: action.error
            }
        default : 
            return state;
    }
}

export default reducer;