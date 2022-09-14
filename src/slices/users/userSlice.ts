import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const ACCESS_KEY = 'dc-access'
const USERNAME_KEY = 'dc-username'
const EXPIRES_KEY = 'dc-expires'

interface UserState {
  accessToken: string,
  user: {
    email: string,
    username:string,
    id: number | null
  },
  isAuthenticated: boolean;
}


const initialState: UserState = {
    accessToken: '',
    user: {
      email: '',
      username:'',
      id: null
    },
    isAuthenticated: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<UserState>) => {
      state.accessToken = action.payload.accessToken
      state.user.email = action.payload.user.email
      state.user.username = action.payload.user.username
      state.isAuthenticated = Boolean(action.payload.accessToken)
    },
    loginSuccess: (state, action: PayloadAction<UserState>) => {
      state.accessToken = action.payload.accessToken
      state.user.email = action.payload.user.email
      state.user.username = action.payload.user.username
      state.isAuthenticated = Boolean(action.payload.accessToken)

      const tokenExpires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

      localStorage.setItem(ACCESS_KEY, action.payload.accessToken)
      localStorage.setItem(USERNAME_KEY, action.payload.user.username)
      localStorage.setItem(EXPIRES_KEY, tokenExpires.toString())
    }
  },
})

export const { register, loginSuccess} = userSlice.actions

export const userReducer = userSlice.reducer