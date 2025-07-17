import { CodeXmlIcon, ContactIcon, HomeIcon, icons, User, UserIcon } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const FloatingMenu = () => {
  return (
    <header className="sticky inset-x-0 top-5 z-50 flex justify-center">
    <nav className="items-center justify-between p-6 lg:px-8 glassbg" aria-label="Global">
      <div className="lg:flex lg:gap-x-12 lg:justify-center">
        <a href="#" className='flex justify-center gap-2 hover:opacity-50 transition'>Home <HomeIcon className ="h-5 w-5"/></a>
        <a href="#" className='flex justify-center gap-2 hover:opacity-50 transition'>About <UserIcon className ="h-5 w-5"/></a>
        <a href="#" className='flex justify-center gap-2 hover:opacity-50 transition'>Portfolio <CodeXmlIcon className ="h-5 w-5"/></a>
        <a href="#" className='flex justify-center gap-2 hover:opacity-50 transition'>Contact <ContactIcon className ="h-5 w-5"/></a>
      </div>
    </nav>
    </header>
  )
}

export default FloatingMenu