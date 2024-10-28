import BrandLogo from '@/components/BrandLogo'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

type Props = {}

function NavBar({}: Props) {
  return (
    <header className='flex py-4 shadow bg-background'>
      <nav className='flex items-center gap-10 container'>
        <Link className='mr-auto' href="/dashboard">
          <BrandLogo />
        </Link>
        <Link href="/dashboard/products">Products</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/subscription">Subscription</Link>
        <UserButton />
      </nav>
    </header>
  )
}

export default NavBar