import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  accountDetails: Record<string, string>;
  personalInfo: Record<string, string>;
}

const initialState: SignUpState = {
  accountDetails: {
    username: '',
    email: '',
    password: ''
  },
  personalInfo: {
    firstName: '',
    lastName: ''
  }
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setAccountDetails: (state, action: PayloadAction<SignUpState['accountDetails']>) => {
      state.accountDetails = action.payload;
    },
    setPersonalInfo: (state, action: PayloadAction<SignUpState['personalInfo']>) => {
      state.personalInfo = action.payload;
    }
  }
});

export const { setAccountDetails, setPersonalInfo } = signupSlice.actions;
export default signupSlice.reducer;
