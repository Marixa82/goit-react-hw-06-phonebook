import { combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./createFilter";
import { contactsReducer } from "./createSlice";

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})