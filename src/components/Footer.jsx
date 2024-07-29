import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <div className='absolute bottom-0 p-1 w-full flex items-center justify-center h-[70px] backdrop-blur-md'>
        <div className='h-full bg-blue-400 w-3/4 rounded-2xl flex items-center '>
            <div className='flex flex-row  justify-evenly w-full '>
                <Image
                src="/icons/image.png"
                alt=''
                height={50}
                width={50}
                />
                <Image
                src="/icons/network.png"
                alt=''
                height={50}
                width={50}
                />
                <Image
                src="/icons/profile.png"
                alt=''
                height={50}
                width={50}
                />
                <Image
                src="/icons/wallet.png"
                alt=''
                height={50}
                width={50}
                />
            </div>
        </div>
    </div>
  )
}

export default Footer