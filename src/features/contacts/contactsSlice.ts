import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ContactsState {
  list: [];
  isLoading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState: ContactsState = {
  list: [],
  isLoading: false,
  error: '',
}

export const contactsSlice = createSlice({
  name: 'contacts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setContactsList: (state, action: PayloadAction<[]>) => {
        state.list = [...action.payload]
      },
    addContact: (state, action: PayloadAction<[]>) => {
       state.list.push(...action.payload)
    },
    removeContact: (state) => {
        state.list.pop()
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    
  },
})

export const { setContactsList } = contactsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectContactList = (state: RootState) => state.contacts.list

export const contactsReducer = contactsSlice.reducer