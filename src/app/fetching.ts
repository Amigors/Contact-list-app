import { AppDispatch } from "./store";
import axios from "axios";
import { contactsSlice } from "../features/contacts/contactsSlice";

export const fetchContacts = () => async (dispatch: AppDispatch) => {
    const response = await axios('http://localhost:3000/contacts');
    dispatch(contactsSlice.actions.setContactsList(response.data))
}
