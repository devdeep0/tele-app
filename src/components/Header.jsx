import React from 'react'
import { TonConnectButton } from '@tonconnect/ui-react'
function Header() {
  return (
    <div className='h-20 flex justify-between m-2 items-center'>
        <div>
        <div>logo</div>
        </div>
        <div>
            <div className='flex gap-2 justify-center items-center'>
                <div className='h-3/4 w-[70px] bg-blue-400 rounded-xl flex justify-center'>$0.00</div>
                <TonConnectButton />
                
            </div>
        </div>
       
    </div>
  )
}

export default Header