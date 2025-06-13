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
                setText(folder);
            }
        };
    
        return (
        <>
            <Grid xs={labelSize.xs} sm={labelSize.sm} sx={labelSx}>
                <FormLabel htmlFor="docs-folder">Docs Folder</FormLabel>
            </Grid>
            <Grid xs={inputSize.xs} sm={inputSize.sm}>
                <FormControl orientation="horizontal" sx={{ display: 'flex', gap: 1 }}>
                    <Input
                        value={text}
                        onChange={handleTextChange}
                        size="md" id="docs-folder" placeholder="Select a folder" readOnly fullWidth
                        endDecorator= {
                            <Button 
                                variant="solid" 
                                color="neutral" 
                                onClick={handlePickFolder}
                                sx={{width:80}}
                            >
                                Pick
                            </Button>
                        }
                    />
                </FormControl>
            </Grid> 
        </>
    );
}