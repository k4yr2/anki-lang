import { FormLabel, Input, Grid, FormControl, Button, IconButton, useTheme } from "@mui/joy";
import { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { green, yellow } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/data/store";
import { setOpenAIKey, setOpenAIStatus } from "@/slice/settings";

const SettingsPanel = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={2} alignItems="center">
            <SP_OpenAIKey />
        </Grid>
    );
}

export default SettingsPanel;

//

const SP_OpenAIKey = () => {
    const theme = useTheme();
    const { openAI } = useSelector((state: RootState) => state.settings);
    const [key, setKey] = useState(openAI.key || '');

    const dispatch = useDispatch<AppDispatch>();

    const validateKey = () => {
        dispatch(setOpenAIStatus("loading"));

        setTimeout(() => {
            dispatch(setOpenAIStatus("success"));
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setOpenAIKey(e.target.value));
        if (openAI.status !== "idle") dispatch(setOpenAIStatus("idle"));
    };

    const renderIcon = () => {
        switch (openAI.status) {
            case 'idle':
                return <QuestionMarkOutlinedIcon sx={{ color: theme.palette.warning[700] }} />;
            case 'error':
                return <ErrorIcon sx={{ color: theme.palette.danger[500] }} />;
            case 'success':
                return <CheckCircleOutlinedIcon sx={{ color: theme.palette.success[400] }} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Grid xs={12} sm={2.5} sx={labelSx}>
                <FormLabel htmlFor="openai-key">OpenAI Key</FormLabel>
            </Grid>
            <Grid xs={12} sm={9.5}>
                <FormControl>
                    <Input
                        value={key}
                        onChange={(e) => { setKey(e.target.value); }}
                        size="md" id="openai-key" placeholder="Enter your API Key" fullWidth 

                        startDecorator={
                            <Button 
                                variant="soft" 
                                color="neutral" 
                                onClick={validateKey} 
                                disabled={openAI.status === "loading"}
                            >
                                Verify
                            </Button>
                        }
                    />
                </FormControl>
            </Grid> 
        </>
    );
}

//

const labelSx = { display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } };