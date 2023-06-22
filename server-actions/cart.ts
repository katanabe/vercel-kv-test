'use server';

import { kv } from '@vercel/kv';
import { Cart } from './type';
import { revalidatePath } from 'next/cache';

const SESSION_ID = 'session_cart';

export async function cart() {
  const cart = await kv.get<Cart[]>(SESSION_ID);
  return cart ?? [];
}
