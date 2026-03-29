import React from 'react'
import "./globals.css";
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Nameless Productions",
  description: "This is the website of Nameless Productions. There are some cool projects and more!",
  icons: "https://thenamelessdev.com/logo.svg",
  openGraph: {
    title: "Nameless Productions",
    description: "This is the website of Nameless Productions. There are some cool projects and more!",
    images: [
      {
        url: "https://thenamelessdev.com/logo.svg",
        width: 628,
        height: 562,
        alt: "Nameless Productions Logo",
      }
    ],
  }
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const pageClass = "text-white font-bold text-lg cursor-pointer transition-all duration-300 hover:text-gray-500";
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <html lang='en'>
      <body className='bg-gray-800'>
        <nav className='flex border-b p-3 space-x-5 border-white bg-black items-center'>
          <Image src="/logo.svg" alt='logo' width={50} height={50}></Image>
          <Link href="/"><p className='text-white text-2xl font-bold hover:text-gray-500 duration-300 transition-all'>Nameless Productions</p></Link>

          <a href="https://github.com/nameless-Productions/website" target='_blank' className={pageClass}>GitHub</a>

          <div className='ml-auto flex space-x-5'>
            <Link href="/"><p className={pageClass}>Home</p></Link>
            <Link href="/projects" className={pageClass}>Projects</Link>
            <Link href="/dashboard" className={pageClass}>{token ? "Dashboard" : "Login"}</Link>
          </div>
        </nav>
        <main className='m-3 text-white'>
          {children}
          <br />
          <p>&copy; {new Date().getFullYear()} Nameless Productions. Licensed under the MIT license</p>
        </main>
      </body>
    </html>
  )
}
