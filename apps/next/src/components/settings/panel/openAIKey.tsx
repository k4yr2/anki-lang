"use client";
import { AppDispatch } from "@/datas/store/app";
import { saveOpenAIKey } from "@/datas/slice/settings";
import { FormLabel, FormControl, Input, Button, Grid, useTheme, CircularProgress, Divider, Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import { settingsPanel_labelSx as labelSx } from "./main";
import useOpenAIKey from "@/hooks/useOpenAIKey";
import { settingsPanel_labelSize as labelSize } from "./main";
import { settingsPanel_inputSize as inputSize } from "./main";


export const OpenAIKey = () => {
    const theme = useTheme();
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState("");
    const key = useOpenAIKey();

    useEffect(() => {
        setInput(key.content ?? '');
    }, [key.content]);

    return (
        <>
            <Grid xs={labelSize.xs} sm={labelSize.sm} sx={labelSx}>
                <FormLabel htmlFor="openai-key">OpenAI Key</FormLabel>
            </Grid>
            <Grid xs={inputSize.xs} sm={inputSize.sm}>
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