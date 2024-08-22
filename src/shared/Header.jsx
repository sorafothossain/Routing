import React from 'react'
import moment from 'moment';
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
    const day = moment().format('dddd');
    const date = moment().format('Do MMMM, YYYY');
  return (
    <div className='bg-gray-300 py-3 pr-5'>
        <div className='flex justify-between items-center'>
            <div>
                <img src="logo.svg" alt="" className='p-3'/>
            </div>
            <div className='flex items-center gap-5'>
                <div>
                    <h2 className='text-lg font-bold'>{day}</h2>
                    <p>{date}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <img src="avatar.png" alt="" className='size-14' />
                    </div>
                    <div>
                        <p>John Doe</p>
                        <div className='flex items-center'>
                            <p>Admin</p>
                            <TiArrowSortedDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header