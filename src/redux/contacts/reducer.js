import { nanoid } from "nanoid";
import { initialState } from "./initialState";
import { ADD_CONTACT } from "./types";

export const contactsReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[
                    ...state.contacts,
                    {
                        ...payload,
                        id: nanoid()
                    }
                ]

            }
    
        default:
            return state
    }
};