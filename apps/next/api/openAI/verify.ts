export const dynamic = "force-static";

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function OpenAIVerify(key : string) : Promise<boolean> {
    const response = axios.get('https://api.openai.com/v1/models', {
        headers: {
            Authorization: `Bearer ${key}`,
        },
        timeout: 5000
    });

    return await response.then((response) => {
        return response.status === 200;
    }).catch(() => {
        return false;
    });
}