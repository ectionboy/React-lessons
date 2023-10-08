import { nanoid } from "nanoid";
import { initialState } from "./initialState";
import { ADD_CONTACT, DELETE_CONTACT, FILTER } from "./types";

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
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:[
                    ...state.contacts.filter(el => el.id !== payload),
                ]
                }

                case FILTER:
                    return{
                        ...state,
                        filter: payload,
                        }
                
        default:
            return state
    }
};