import AppSettings from "@/states/appSettings";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSettings = {
    openAI: {
        key: '',
        status: 'idle'
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setOpenAIKey: (state, action) => {
            state.openAI.key = action.payload;
        },
        setOpenAIStatus: (state, action) => {
            state.openAI.status = action.payload;
        }
    }
});

export default settingsSlice.reducer;

export const { setOpenAIKey, setOpenAIStatus } = settingsSlice.actions;