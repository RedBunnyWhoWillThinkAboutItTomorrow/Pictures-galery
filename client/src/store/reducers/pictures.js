import {GET_PICTURES} from "../types";

const INITIAL_STATE = {
    pictures: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PICTURES:
            return {
                pictures: action.pictures
            }
        default: return state
    }
}