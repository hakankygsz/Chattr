import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileUser, SignInRequest, SignUpRequest } from "./AuthApi";

interface User {
    id: string;
    provider: 0 | 1;
    email: string;
    username: string;
    role: 0 | 1;
    status: 0 | 1 | 2;
    photo_url: string,
    provider_photo_changed: 0 | 1,
    sensitive: {
        firstName: string,
        lastName: string,
        birthDate: string,
        gender: 0 | 1 | 2
    }
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(SignInRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(SignInRequest.fulfilled, (state, action: PayloadAction<{ data: User }>) => {
                state.loading = false;
                state.user = action.payload.data;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(SignInRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        builder
            .addCase(SignUpRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(SignUpRequest.fulfilled, (state, action: PayloadAction<{ data: User }>) => {
                state.loading = false;
                state.user = action.payload.data;
                state.error = null;
            })
            .addCase(SignUpRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        builder
            .addCase(ProfileUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(ProfileUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(ProfileUser.rejected, (state, action) => {
                state.loading = false;
                state.isLoggedIn = false;
                state.user = null;
                state.error = action.payload as string;
            });
        
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
