"use client";
import { RootState, AppDispatch } from "@/datas/store/app";
import { saveOpenAIKey } from "@/datas/slice/settings";
import { FormLabel, FormControl, Input, Button, Grid, useTheme, CircularProgress, Divider, Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import { settingsPanel_labelSx as labelSx } from "./main";
import { OpenAIVerify } from "../../../../app/api/openAI/verify";
import useOpenAIKey from "@/hooks/useOpenAIKey";

export const OpenAIKey = () => {
    const theme = useTheme();
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState("");
    const key = useOpenAIKey();

    useEffect(() => {
        setInput(key.value);
    }, [key.value]);

    return (
        <>
            <Grid xs={12} sm={2.5} sx={labelSx}>
                <FormLabel htmlFor="openai-key">OpenAI Key</FormLabel>
            </Grid>
            <Grid xs={12} sm={9.5}>
                <FormControl>
                    <Input
                        value={input}
                        onChange={(e) => { setInput(e.target.value); }}
                        size="md" id="openai-key" placeholder="Enter your API Key" fullWidth 
                        disabled={key.loading}
                        startDecorator={
                            <>
                                <Box sx={{ width: 24, display: 'flex', alignItems: 'center', pr: key.loading ? 1.5 : 1, justifyContent: 'center' }}>    
                                    {   
                                        key.loading ? <CircularProgress size="sm" color="primary" />
                                        : key.verified ? <CheckCircleOutlinedIcon sx={{ color: theme.palette.success[400] }} />
                                        : <DangerousOutlinedIcon sx={{ color: theme.palette.danger["solidBg"] }} />
                                    }
                                </Box>
                                <Divider orientation="vertical" sx={{mx:0}}/>
                            </>
                        }
                        endDecorator={
                            <Button 
                                variant="soft" 
                                color="neutral" 
                                onClick={() => { dispatch(saveOpenAIKey(input)); }} 
                                disabled={key.loading}
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