import { Grid } from "@mui/joy";
import OpenAIKey from "./openAIKey";

const SettingsPanel = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={2} alignItems="center">
            <OpenAIKey />
        </Grid>
    );
}

export default SettingsPanel;

//

export const settingsPanel_labelSx = { display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } };