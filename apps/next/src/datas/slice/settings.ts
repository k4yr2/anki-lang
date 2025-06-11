import AppSettings from "@/interfaces/appSettings";
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
        setOpenAIKey: (_, action) => {
            window.settings.openAI.setKey(action.payload);
        },
        setOpenAIStatus: (state, action) => {
            state.openAI.status = action.payload;
        }
    }
});

export default settingsSlice.reducer;

export const { setOpenAIKey, setOpenAIStatus } = settingsSlice.actions;