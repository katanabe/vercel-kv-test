import {kv} from '@vercel/kv';
import {NextResponse} from 'next/server';

export async function GET() {
    const result = await kv.get(`cart:123`);

    return NextResponse.json(result);
}