import { saveOpenAIKey } from "@/datas/slice/settings";
import key from "@deemlol/next-icons/build/icons/key";
import { Box, Button, CircularProgress, Divider, FormControl, FormLabel, Grid, Input } from "@mui/joy";
import { settingsPanel_labelSx as labelSx } from "./main";
import { settingsPanel_labelSize as labelSize } from "./main";
import { settingsPanel_inputSize as inputSize } from "./main";

export const StorageDir = () => {
        return (
        <>
            <Grid xs={labelSize.xs} sm={labelSize.sm} sx={labelSx}>
                <FormLabel htmlFor="storeage-dir">Storage Dir</FormLabel>
            </Grid>
            <Grid xs={inputSize.xs} sm={inputSize.sm}>
                <FormControl>
                    <Input
                        size="md" id="storeage-dir" placeholder="Select a folder" fullWidth 
                        endDecorator={
                            <Button 
                                variant="soft" 
                                color="neutral" 
                                sx={{width: 80}}
                            >
                                Select
                            </Button>
                        }
                    />
                </FormControl>
            </Grid> 
        </>
    );
}