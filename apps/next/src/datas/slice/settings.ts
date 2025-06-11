import AppSettings from "@/interfaces/appSettings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppSettings = {
    openAI: {
        key: {
            value: '',
            verified: false,
            loading: false
        }
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setOpenAIKey: (state, action) => {
            window.settings.openAI.setKey(state.openAI.key.value = action.payload);
        },
        setOpenAIVerified: (state, action: PayloadAction<boolean>) => {
            state.openAI.key.verified = action.payload;
            state.openAI.key.loading = false;
        },
        setOpenAILoading: (state, action : PayloadAction<boolean>) => {
            state.openAI.key.loading = action.payload;
        },

    }
});

export default settingsSlice.reducer;

export const { setOpenAIKey, setOpenAIVerified, setOpenAILoading } = settingsSlice.actions;