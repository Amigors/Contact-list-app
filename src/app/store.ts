import { configureStore } from '@reduxjs/toolkit'
import {contactsReducer} from '../features/contacts/contactsSlice';
import {userReducer} from '../features/users/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from '../services/querys'

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`