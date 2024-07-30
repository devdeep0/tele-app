"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'



function Footer() {
  const [activeImage, setActiveImage] = useState('home');
  const handleImageClick = (imageName) => {
    setActiveImage(imageName);
  };
  return (
    <div className='absolute bottom-0 p-1 w-full flex items-center justify-center h-[70px] backdrop-blur-md'>
        <div className='h-full bg-transparent  w-3/4 rounded-2xl flex items-center '>
            <div className='flex flex-row  justify-evenly w-full '>
            <Link href='/'>
                <Image
                className={`duration-300 transition-all ${activeImage === 'home' ? 'bg-blue-400 rounded-3xl ease-in-out' : 'bg-transparent'}`}
                onClick={() => handleImageClick('home')}
                src="/icons/image.png"
                alt=''
                height={50}
                width={50}
                />
                </Link>

                <Link href='/games'>
                <Image
                 className={`duration-300 transition-all ${activeImage === 'games' ? 'bg-blue-400 rounded-3xl ease-in-out' : 'bg-transparent'}`}
                 onClick={() => handleImageClick('games')}
                src="/icons/network.png"
                alt=''
                height={50}
                width={50}
                />
                 </Link>


                <Image
                 className={`duration-300 transition-all ${activeImage === 'profile' ? 'bg-blue-400 rounded-3xl ease-in-out' : 'bg-transparent'}`}
                 onClick={() => handleImageClick('profile')}
                src="/icons/profile.png"
                alt=''
                height={50}
                width={50}
                />
                <Image
                 className={`duration-300 transition-all ${activeImage === 'wallet' ? 'bg-blue-400 rounded-3xl ease-in-out' : 'bg-transparent'}`}
                 onClick={() => handleImageClick('wallet')}
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