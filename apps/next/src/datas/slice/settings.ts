import { OpenAIVerify } from "@/api/openAI/verify";
import AppSettings from "@/interfaces/appSettings";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
            window.api.openAI.setKey(state.openAI.key.value = action.payload);
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

//

export const saveOpenAIKey = createAsyncThunk(
    'settings/saveOpenAIKey', async (key: string | undefined, { dispatch }) => {
        
        if(!key || key === '') {
            dispatch(setOpenAIKey(''));
            dispatch(setOpenAIVerified(false));
            return;
        }

        dispatch(setOpenAILoading(true));
        
        await window.api.openAI.setKey(key);
        dispatch(setOpenAIKey(key));

        const verified = await OpenAIVerify(key);
        dispatch(setOpenAIVerified(verified));
    }
);

const { setOpenAIKey, setOpenAIVerified, setOpenAILoading } = settingsSlice.actions;