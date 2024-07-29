"use client"
import React from 'react'
import { useTonAddress } from '@tonconnect/ui-react';
function Main() {
 
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(true);
 
  return (
    <main className='p-4' >
        <div className='flex gap-4 flex-col'>
        <div className='text-blue-400 text-3xl font-bold'>Hey {userFriendlyAddress}, <br /> Ready to play?</div>
        <div className='text-gray-500'>Categories</div>
        <div className='flex gap-5 max-w-full overflow-x-auto'>
            <div className='bg-stone-900 p-3 rounded-3xl'>shooting</div>
            <div className='bg-stone-900 p-3 rounded-3xl'>arena</div>
            <div className='bg-stone-900 p-3 rounded-3xl'>arcade</div>
            <div className='bg-stone-900 p-3 rounded-3xl'>missionary</div>
            <div className='bg-stone-900 p-3 rounded-3xl'>69</div>
        </div>
        <div className='text-gray-500'>Most Played</div>
        <div className='flex overflow-x-auto gap-4 max-w-full'>
          <div className='h-48 w-[150px] bg-blue-400 rounded-xl'></div>
        </div>
        <div className='text-gray-500'>New Games</div>
        <div className='w-full h-[70px] p-2 flex justify-between  bg-gray-500 rounded-2xl'>
          <div className='flex gap-3 justify-center items-center'>
            <div className='h-full bg-white rounded-2xl w-[50px]'></div>
            <div className='flex-col items-center justify-center'>
              <div className='text-xl'>Game</div>
              <div className='text-sm'>action-cums</div>
            </div>

          </div>
          <div className='flex justify-center items-center pr-3'>play</div>
        </div>
        </div>
    </main>
  )
}

export default Main