import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const apiKey = searchParams.get('apiKey');

    if (!apiKey) {
        return NextResponse.json({ valid: false, error: 'API key missing' }, { status: 400 });
    }

    try {
        const response = await axios.get('https://api.openai.com/v1/models', {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
            timeout: 5000
        });

        return NextResponse.json({ valid: response.status === 200 });
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return NextResponse.json({ valid: false, status }, { status });
    }
}