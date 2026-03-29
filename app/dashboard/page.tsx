import { headers } from 'next/headers';
import React from 'react'

export default async function Dashboard() {
    const username = (await headers()).get("x-username");
  return (<>
    <p className='text-lg font-bold'>Hello, {username}!</p>
    <a href="/dashboard/logout" className='underline text-blue-500'>Log out</a>
  </>)
}
