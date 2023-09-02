import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState= JSON.parse(localStorage.getItem('user') || 'null')

export const userSlice = createSlice({
    name: "StateUser",
    initialState: initialState,
    reducers: {
        getUser: (state) => {
            return state;
        },

        setUser: (state, action:PayloadAction<any>): void => {
            if (action.payload) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }

        },

        logOut: (): void => {
            localStorage.removeItem('user');
        }

    }
})

export const {getUser, setUser, logOut} = userSlice.actions;
export const selectCount = (state: RootState) => state.stateUser;
export default userSlice.reducer;