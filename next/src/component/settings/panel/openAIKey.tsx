import { RootState, AppDispatch } from "@/data/store";
import { setOpenAIStatus, setOpenAIKey } from "@/slice/settings";
import { FormLabel, FormControl, Input, Button, Grid, useTheme, CircularProgress, Divider, Box } from "@mui/joy";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { settingsPanel_labelSx as labelSx } from "./main";

export const OpenAIKey = () => {
    const theme = useTheme();
    const { openAI } = useSelector((state: RootState) => state.settings);
    const [key, setKey] = useState(openAI.key || '');

    const dispatch = useDispatch<AppDispatch>();

    const validateKey = () => {
        dispatch(setOpenAIStatus("loading"));

        setTimeout(() => {
            dispatch(setOpenAIStatus(openAI.status == "success" ? "idle" : "success"));
        }, 1500);
    };

    const isLoading = openAI.status === "loading";

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
                        disabled={isLoading}
                        startDecorator={
                            <>
                                <Box sx={{ width: 24, display: 'flex', alignItems: 'center', pr: isLoading ? 1.5 : 1, justifyContent: 'center' }}>    
                                    {   
                                        isLoading ? <CircularProgress size="sm" color="primary" />
                                        : openAI.status === "success" ? <CheckCircleOutlinedIcon sx={{ color: theme.palette.success[400] }} />
                                        : <ErrorIcon sx={{ color: theme.palette.danger[400] }} />
                                    }
                                </Box>
                                <Divider orientation="vertical" sx={{mx:0}}/>
                            </>
                        }
                        endDecorator={
                            <Button 
                                variant="soft" 
                                color="neutral" 
                                onClick={validateKey} 
                                disabled={isLoading}
                                sx={{width: 80}}
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

export default OpenAIKey;