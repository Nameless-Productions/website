import { redBtnClass } from '@/vars';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

async function logout() {
    "use server";
    const cookieStore = await cookies();
    cookieStore.delete("token");
    redirect("/");
}

export default async function Dashboard() {
    const username = (await headers()).get("x-username");
  return (<>
    <p className='text-lg font-bold'>Hello, {username}!</p>
    <form action={logout} className='mt-3'>
      <input type="submit" value="Log out" className={redBtnClass} />
    </form>
  </>)
}
