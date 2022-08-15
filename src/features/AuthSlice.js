import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: false,
        username: ''
    },
    reducers: {
        login: (state, action) => {
            state.authStatus = true;
            state.username = action.payload;
        },
        logout: (state) => {
            state.authStatus = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;