import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
    id: string
    name: string
    email: string
}

interface AuthState {
    user: User | null
    token: string | null
    loading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (
        credentials: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post(
                'https://locallhost:5000/login',
                credentials
            )
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(
                loginUser.fulfilled,
                (
                    state,
                    action: PayloadAction<{ user: User; token: string }>
                ) => {
                    state.loading = false
                    state.user = action.payload.user
                    state.token = action.payload.token
                }
            )
            .addCase(
                loginUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    state.error = action.payload || 'Login failed'
                }
            )
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
