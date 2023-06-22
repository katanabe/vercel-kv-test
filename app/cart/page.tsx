'use client';

import { addCart } from '@/server-actions/add-cart';
import { cart } from '@/server-actions/cart';
import { Cart } from '@/server-actions/type';
import { useEffect, useState } from 'react';

export default function ActionForm() {
  const [cartItems, setCartItems] = useState<Cart[]>([]);

  const fetchCart = () => {
    return cart().then((result) => {
      setCartItems(result);
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const onAction = async (formData: FormData): Promise<void> => {
    await addCart(formData);
    fetchCart();
  };

  return (
    <div>
      <div className='flex flex-col'>
        {cartItems?.map(({ id, quantity }, i) => (
          <span key={i}>
            {id}:{quantity}
          </span>
        ))}
      </div>
      <form action={onAction}>
        <input
          type='text'
          name='id'
          defaultValue='A001'
          className='bg-gray-500'
        />
        <button type='submit'>カートに追加</button>
      </form>
    </div>
  );
}
