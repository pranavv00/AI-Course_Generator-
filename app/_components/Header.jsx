import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'>
      <div className='flex justify-between items-center p-4 md:p-5 max-w-screen-xl mx-auto'>
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src={'/seedofocode_logo.png'} 
            alt='SeedOfCode Logo' 
            width={150} 
            height={100}
            className="h-auto"
            priority
          />
        </Link>
        <Button asChild className="font-semibold shadow-md hover:shadow-lg transition-shadow">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}

export default Header
