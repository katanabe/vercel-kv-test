'use server';

import { kv } from '@vercel/kv';
import { Cart } from './type';
import { cart } from './cart';

const SESSION_ID = 'session_cart';

export async function addCart(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) {
    return;
  }

  const result = await cart();
  const values: Cart[] = [...(result ?? []), { id, quantity: 1 }];
  await kv.set<Cart[]>(SESSION_ID, values);
}
