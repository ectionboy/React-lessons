import { ADD_CONTACT, DELETE_CONTACT, FILTER } from "./types";

export const addContact = (value) => ({ type: ADD_CONTACT, payload: value })

export const deleteContact = (value) => ({ type: DELETE_CONTACT, payload: value })

export const filterChange = (value) => ({ type: FILTER, payload: value })