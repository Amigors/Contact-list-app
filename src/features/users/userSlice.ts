import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface UserState {
  accessToken: string,
  user: {
    email: string,
    id: number | null
  },
}

// Define the initial state using that type
const initialState: UserState = {
    accessToken: '',
    user: {
      email: '',
      id: null
    },
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload
      console.log('action', action.payload)
    },
    setToken: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.users.user
export const selectToken = (state: RootState) => state.users.accessToken

export const userReducer = userSlice.reducer