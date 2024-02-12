import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex-center top-0 z-50 w-full border-b-2 border-black-200 py-5 text-white'>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-6 sm:px-16'>
                <Link href='javascript:;'>
                    <Image src='/jsm-logo.svg' width={50} height={40} alt='Home-Logo' />
                </Link>

                <Image src='/hamburger-menu.svg' width={30} height={30} alt='Hamburage Menu' className='block md:hidden' />

                <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                    <li className='body-text text-gradient_blue-purple !font-bold'>
                        <Link href='javascript:;' target='_blank'>
                            Sign Up
                        </Link>
                    </li>

                    <li className='body-text !font-normal'>
                        <Link href='javascript:;' target='_blank'>
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar