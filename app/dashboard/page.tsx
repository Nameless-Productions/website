import {  headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'

export default async function Dashboard() {
    const username = (await headers()).get("x-username");
  return (<>
    <p className='text-lg font-bold'>Hello, {username}!</p>
    <Link href="/dashboard/logout" className='underline text-blue-500'>Log out</Link>
  </>)
}
