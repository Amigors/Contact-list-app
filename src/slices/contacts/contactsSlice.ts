import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ContactsState {
  list: [];
  isLoading: boolean;
  error: string;
}

const initialState: ContactsState = {
  list: [],
  isLoading: false,
  error: '',
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContactsList: (state, action: PayloadAction<[]>) => {
        state.list = [...action.payload]
      },
    removeContact: (state) => {
        state.list.pop()
    },
    
  },
})

export const { setContactsList } = contactsSlice.actions

export const selectContactList = (state: RootState) => state.contacts.list

export const contactsReducer = contactsSlice.reducer