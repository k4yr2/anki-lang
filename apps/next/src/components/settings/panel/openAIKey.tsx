"use client";
import { RootState, AppDispatch } from "@/datas/store/app";
import { setOpenAIStatus, setOpenAIKey } from "@/datas/slice/settings";
import { FormLabel, FormControl, Input, Button, Grid, useTheme, CircularProgress, Divider, Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import { settingsPanel_labelSx as labelSx } from "./main";
import { OpenAIVerify } from "../../../../app/api/openAI/verify";

export const OpenAIKey = () => {
    const theme = useTheme();
    const { openAI } = useSelector((state: RootState) => state.settings);
    const [key, setKey] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setKey(window.settings ? "sd" : "sdf");
        if (window.settings?.openAI?.getKey()) {
            const savedKey = "window.settings.openAI.getKey()";
            if (savedKey) setKey(savedKey);
        }
    }, []);

    const verifyKey = () => {
        dispatch(setOpenAIStatus("loading"));

        OpenAIVerify(key).then(verified => {
            if (verified) {
                dispatch(setOpenAIKey(key));
                dispatch(setOpenAIStatus("success"));
            }
            else {
                dispatch(setOpenAIStatus("error"));
            }
        });

        setTimeout(() => {
            if( openAI.status === "loading" )
            dispatch(setOpenAIStatus("error"));
        }, 5000);
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
                                onClick={verifyKey} 
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