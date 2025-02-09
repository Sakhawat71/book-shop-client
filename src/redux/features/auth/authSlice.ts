import { RootState } from './../../store';
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
    exp: number;
    iat: number;
    id: string;
    role: string;
    userEmail: string;
};

type authState = {
    user: null |TUser ;
    token: null | string;
};

const initialState: authState = {
    user: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});


export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;