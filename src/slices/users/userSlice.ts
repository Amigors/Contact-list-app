import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface UserState {
  accessToken: string,
  user: {
    email: string,
    id: number | null
  },
}

const initialState: UserState = {
    accessToken: '',
    user: {
      email: '',
      id: null
    },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    },
    setToken: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => state.users.user
export const selectToken = (state: RootState) => state.users.accessToken

export const userReducer = userSlice.reducer