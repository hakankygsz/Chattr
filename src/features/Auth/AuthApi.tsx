import axiosInstance from "../../app/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Credentials {
    userDetails?: { 
        username?: string;
        email?: string;
        password?: string;
    };
    sensitiveDetails?: {
        firstName?: string;
        lastName?: string;
        birthDate?: Date;
        gender?: string;
    };
    rememberMe?: boolean;
}

const handleError = (error: any) => {
    if (error?.response?.data?.message) {
        return error.response.data.message;
    }
    return 'An unknown error occurred';
};

export const SignInRequest = createAsyncThunk(
    'auth/sign-in',
    async (credentials: Credentials, { rejectWithValue }) => {
        try {
            const { userDetails, rememberMe = false } = credentials;
            
            if (!userDetails?.username || !userDetails?.password) {
                return rejectWithValue('Username and password are required');
            }

            const response = await axiosInstance.post('/auth/sign-in', {
                userDetails: {
                    username: userDetails.username,
                    password: userDetails.password
                },
                rememberMe
            });

            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const SignUpRequest = createAsyncThunk(
    'auth/sign-up',
    async (credentials: Credentials, { rejectWithValue }) => {
        try {
            const { userDetails, sensitiveDetails } = credentials;

            if (!userDetails?.username || !userDetails?.email || !userDetails?.password) {
                return rejectWithValue('Username, email, and password are required');
            }

            if (!sensitiveDetails?.firstName || !sensitiveDetails?.lastName) {
                return rejectWithValue('First name and last name are required');
            }

            const response = await axiosInstance.post('/auth/sign-up', {
                userDetails: {
                    username: userDetails.username,
                    email: userDetails.email,
                    password: userDetails.password,
                },
                sensitiveDetails: {
                    firstName: sensitiveDetails.firstName,
                    lastName: sensitiveDetails.lastName,
                    birthDate: sensitiveDetails.birthDate,
                    gender: sensitiveDetails.gender === 'male' ? 0 : 1
                },
            });

            return response.data;
        } catch (error: any) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const ProfileUser = createAsyncThunk(
    'auth/profile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/auth/verify', { withCredentials: true });

            if (response?.data?.success) {
                const profileResponse = await axiosInstance.get('/auth/profile', { withCredentials: true });
                return profileResponse.data.data;
            } else {
                return rejectWithValue('User is not authenticated');
            }
        } catch (error: any) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const UserExist = createAsyncThunk(
    'auth/exist',
    async (credentials: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/auth/exist', {
                params: { username: credentials.username, email: credentials.email }
            });

            if (response.data.success) {
                return true;
            }

            return rejectWithValue('User does not exist');
        } catch (error: any) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const SignOutRequest = createAsyncThunk(
    'auth/sign-out',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.delete('/auth/sign-out', { withCredentials: true });

            return response.data;
        } catch (error: any) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const SignInGoogleRequest = createAsyncThunk(
    'auth/google',
    async (credentials: any, { rejectWithValue }) => {
        try {
            const { code } = credentials;

            if (!code) {
                return rejectWithValue('Google code is required');
            }

            const response = await axiosInstance.post('/auth/google', { code });

            if (response.data.success) {
                return response.data;
            } else {
                return rejectWithValue(response.data.message || 'Google sign in failed');
            }
        } catch (error: any) {
            return rejectWithValue(handleError(error));
        }
    }
);