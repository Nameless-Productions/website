"use client";

import { inputClass } from '@/vars'
import React, { useRef, useState } from 'react'

export default function DiscordWebhooker() {

    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [succesMsg, setSuccesMsg] = useState("");
    const [content, setContent] = useState("");
    const [embeds, setEmbeds] = useState<{title?: string, description?: string, color?: number}[]>([]);

    async function handleSend() {
        setError("");
        setSuccesMsg("");
        if(!url) return setError("Error: missing url");
        if(content == "" && embeds.length == 0) return setError("Error: missing content and/or embeds");

        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: content,
                    embeds: embeds
                })
            });
            if(!response.ok) return setError("Error while sending webhook. More info in the console");
            setSuccesMsg("Webhook sent!");
        }
        catch(err){
            setError("Error while sending webhook. More info in console.");
            console.error("Error: ", err);
        }
    }

    return (<>
        <p className='text-lg font-bold'>Discord Webhooker</p>
        <p>A Discord webhook sender. It has no complications. Just write the URL, the content and add one or more embeds optionally. It just works.</p>
        <br />
        
        <div className='border-2 border-black bg-gray-900 w-fit rounded-2xl p-5'>
            <input type="text" className={inputClass} placeholder='https://discord.com/api/v10/webhooks/id/token' value={url} onChange={(e) => setUrl(e.target.value)} />

            <br />

            <textarea className={inputClass} rows={5} value={content} onChange={(e) => setContent(e.target.value)}></textarea>

            <br />
            <p className='text-red-500'>{error}</p>
            <br />
            <p className='text-green-400'>{succesMsg}</p>
            <br />
            <button className='border-2 border-black bg-green-600 w-full rounded-xl cursor-pointer active:bg-green-700 transition-all duration-300' onClick={handleSend}>Send</button>
        </div>
    </>)
}
