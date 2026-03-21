import React from 'react'
import "./globals.css";
import Link from 'next/link';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pageClass = "font-bold text-lg cursor-pointer transition-all duration-300 hover:text-gray-500";
  return (
    <html lang='en'>
      <body>
        <nav className='flex border-b-2 p-3 space-x-5'>
          <Link href="/" className='text-2xl font-bold hover:text-gray-500 duration-300 transition-all'>Nameless Productions</Link>

          <ul className='ml-auto'>
            <li className={pageClass}><Link href="/">Home</Link></li>
          </ul>
        </nav>
        <main className='m-3'>
          {children}
          <br />
          <p>&copy; {new Date().getFullYear()} Nameless Productions. Licensed under the MIT license</p>
        </main>
      </body>
    </html>
  )
}
