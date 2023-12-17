"use client"

import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image src={logo} alt='' height={48} width={186}/>
    </Link>
  )
}

export default Logo