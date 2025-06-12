"use client";
import { FormControl, FormLabel, Grid, Input } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import Link from "next/link";

export default function SettingsPage() {
  const labelSx : SxProps = { display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } };

  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={2} alignItems="center">
          <Grid xs={12} sm={3} sx={labelSx}>
            <FormLabel>OpenAI Key</FormLabel>
          </Grid>
          <Grid xs={12} sm={9}>
            <Input placeholder="Enter your API Key" fullWidth/>
          </Grid>
        </Grid>
    </div>
  );
}