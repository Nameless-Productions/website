import { headers } from 'next/headers'
import React from 'react'
import Buttons from './btns';

export default async function ApiKeys() {
    const username = (await headers()).get("x-username");
    return(<>
        <Buttons username={username!} />
    </>)
}