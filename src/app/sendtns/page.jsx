'use client'
import { useTonConnectUI } from '@tonconnect/ui-react';
import React from 'react';
const transaction = {
    messages: [
        {
            address: "0QChwMiVBtJA0RmYdGjKuTAm0OIQnDYoMVpI7bYRUPzh_aqS", // destination address
            amount: "20000000" //Toncoin in nanotons
        }
    ]

}

const Settings = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    return (
        <div>
            <button className='mt-[100px]' onClick={() => tonConnectUI.sendTransaction(transaction)}>
                Send transaction
            </button>
        </div>
    );
};

export default Settings