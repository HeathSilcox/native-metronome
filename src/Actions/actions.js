import {SET_BPM} from "../Constants/action-types";


export const setBPM = payload => {
    return {type: SET_BPM, payload};
};