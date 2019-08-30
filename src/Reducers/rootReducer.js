import initialState from "../initialState";
import {SET_BPM} from "../Constants/action-types";


export default (state = initialState, action) => {
    if (action.type === SET_BPM) {
        return {
            ...state,
            currentBPM: action.payload,
        };
    }

    return state;
}