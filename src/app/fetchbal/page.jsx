import React from 'react'
import { publicClient } from './client';
async function page() {
    const balance = await publicClient.getBalance({
        address: '0:123...',
      });
  return (
    <div className='h-screen flex justif-center items-center'>{balance}</div>
  )
}

export default page