"use client";
import { updateApiSecret } from '@/lib/api/updateApiSecret';
import Link from 'next/link';
import React from 'react'

export default function Buttons({username}: {username: string}) {
  return (<>
    <button className="redBtn" onClick={() => updateApiSecret(username)}>Invalidate ALL API keys</button>

    <Link className="greenBtn" href="/dashboard/api/create">Create API key</Link>
  </>)
}
