"use client"

import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"}>
       {/************* logo part start here *******************/}

        <Image src={logo} alt='' height={48} width={186}/>

        {/************* logo part end here *******************/}

    </Link>
  )
}

export default Logo