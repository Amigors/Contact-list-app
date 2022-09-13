import { configureStore } from '@reduxjs/toolkit'
import {contactsReducer} from '../slices/contacts/contactsSlice';
import {userReducer} from '../slices/users/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from './querys'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    users: userReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(contactsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof configureStore>
