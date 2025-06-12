import { FormLabel, Input, Grid } from "@mui/joy";

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
    return (
        <>
            <Grid xs={12} sm={2} sx={labelSx}>
                <FormLabel htmlFor="openai-key">OpenAI Key</FormLabel>
            </Grid>
            <Grid xs={12} sm={10}>
                <Input id="openai-key" placeholder="Enter your API Key" fullWidth />
            </Grid>
        </>
    );
}

//

const labelSx = { display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } };