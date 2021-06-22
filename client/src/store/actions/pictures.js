import {GET_PICTURES} from "../types";
import axios from "axios";

export const getPictures = () => async dispatch => {
    try {
        const payload = await axios.get("http://localhost:3004/pictures/");
        const pictures = payload.data;

        dispatch({type: GET_PICTURES, pictures})
    } catch (e) {
        alert(e)
    }
};