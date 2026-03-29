import { createApiKey } from '@/lib/api/createApiKey';
import { headers } from 'next/headers'
import React from 'react'

export default async function CreateApiPage() {
    const username = (await headers()).get("x-username");
    const apiKey = await createApiKey(username!);
  return (<>
    <p>You api key: <span className='bg-gray-900 p-1.5 rounded-xl border border-gray-950'>{apiKey}</span></p>
  </>)
}
