import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ILoginRequest, login } from '../../api/user'
import { setUser } from '../slices/userSlice'
import { deleteToken, deleteUser, persistToken, readToken } from '../../utils/localStorage.service'

export interface AuthSlice {
  token: string | null
}

const initialState: AuthSlice = {
  token: readToken()
}

export const doLogin = createAsyncThunk(
  'auth/doLogin',
  async (loginPayload: ILoginRequest, { dispatch }) =>
    login(loginPayload).then(res => {
      dispatch(setUser(res.user))
      persistToken(res.token)

      return res.token
    })
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload
    })
  }
})

export default authSlice.reducer
