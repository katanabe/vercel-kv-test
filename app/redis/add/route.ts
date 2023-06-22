import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  await kv.set(`cart:123`, 'abc');

  return NextResponse.json({ success: true });
}
