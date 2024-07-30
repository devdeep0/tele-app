import React from 'react'
import { TonConnectButton } from '@tonconnect/ui-react'
function Header() {
  return (
    <div className='h-20  fixed top-0 p-4 flex justify-between m-2 w-full items-center'>
        <div>
        <div>logo</div>
        </div>
        <div>
            <div className='flex gap-2 fixded justify-center items-center bg-transparent'>
                <div className='h-3/4 w-[70px] bg-blue-400 rounded-xl  flex justify-center'>$0.00</div>
                <TonConnectButton />
                
            </div>
        </div>
       
    </div>
  )
}

export default Header