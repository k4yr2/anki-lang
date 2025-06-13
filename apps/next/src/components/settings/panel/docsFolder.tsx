import { Button, FormControl, FormLabel, Grid, Input } from "@mui/joy";
import { settingsPanel_labelSx as labelSx } from "./main";
import { settingsPanel_labelSize as labelSize } from "./main";
import { settingsPanel_inputSize as inputSize } from "./main";
import { useState } from "react";

export const StorageDir = () => {
        const [text, setText] = useState("");

        const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
        };

        const handlePickFolder = async () => {
            const folder = await window.api.dialog.pickFolder();
            if (folder) {
                console.log("Selected folder:", folder);
            }
        };
    
        return (
        <>
            <Grid xs={labelSize.xs} sm={labelSize.sm} sx={labelSx}>
                <FormLabel htmlFor="docs-folder">Docs Folder</FormLabel>
            </Grid>
            <Grid xs={inputSize.xs} sm={inputSize.sm}>
                <FormControl>
                    <Input
                        value={text}
                        onChange={handleTextChange}
                        size="md" id="docs-folder" placeholder="Select a folder" fullWidth 
                        endDecorator={
                            <Button 
                                variant="soft" 
                                color="neutral" 
                                sx={{width: 80}}
                                onClick={handlePickFolder}
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