import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div >
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*----left section -----*/}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat distinctio molestias aut natus itaque a, expedita dignissimos quibusdam porro velit corporis necessitatibus accusantium maiores quisquam facilis. Impedit ducimus in perferendis?</p>
                </div>
                {/*----centre section -----*/}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact Us</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                {/*----right section -----*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+254758942015</li>
                        <li>njokijecinta254@gmail.com</li>
                    </ul>

                </div>
            </div>
            <div>
                {/**-----Copyright text */}
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>Copyright 2024@ Jecinta - All Right Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer