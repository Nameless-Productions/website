"use client";
import { updateApiSecret } from '@/lib/api/updateApiSecret';
import { greenBtnClass, redBtnClass } from '@/vars';
import Link from 'next/link';
import React from 'react'

export default function Buttons({username}: {username: string}) {
  return (<>
    <button className={redBtnClass} onClick={() => updateApiSecret(username)}>Invalidate ALL API keys</button>

    <Link className={greenBtnClass} href="/dashboard/api/create">Create API key</Link>
  </>)
}
