"use client";
import { FormControl, FormLabel, Input } from "@mui/joy";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div>
        Settings 696
        <Link href="/">Home</Link>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input />
        </FormControl>
    </div>
  );
}