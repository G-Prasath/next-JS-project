import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-100 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col align-center'>
        <p>Copyrights &amp; Photograme Pro | All Rights Reserved</p>

        <div className='flex gap-x-9'>
            <Link href='javascript:;'>
                Terms & Conditions
            </Link>
            <Link href='javascript:;'>
                Privacy & Polices
            </Link>
        </div>
    </footer>
  )
}

export default Footer