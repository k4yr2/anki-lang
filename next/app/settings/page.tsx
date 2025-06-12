"use client";
import { FormControl, FormLabel, Grid, Input } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import Link from "next/link";

export default function SettingsPage() {
  const labelSx : SxProps = { display: 'flex', justifyContent: 'right' };

  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={2} alignItems="center">
          <Grid xs={2} sx={labelSx}>
            <FormLabel>OpenAI Key</FormLabel>
          </Grid>
          <Grid xs={10}>
            <Input placeholder="Enter your API Key" />
          </Grid>
        </Grid>
    </div>
  );
}