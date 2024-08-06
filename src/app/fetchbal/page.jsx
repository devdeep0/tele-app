import React from 'react'
import { publicClient } from './client';
async function page() {
    const balance = await publicClient.getBalance({
        address: '0QBDx43U9pZE7_v4Ra8WHNfYdmdvWR36ez7SQJpvtXhtSY5_',
      });
  return (
    <div className='h-screen flex items-center justify-center w-full'>{balance}</div>
  )
}

export default page