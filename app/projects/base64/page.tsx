"use client";
import { inputClass } from '@/vars';
import React, { useState } from 'react'

export default function Base64Proj() {
    const [input, setInput] = useState("");
    const [deorencode, setdeorencode] = useState("encode");
  return (<>
    <p className='text-lg font-bold'>Base64 en/decoder</p>

    <input type="text" className={inputClass} placeholder='Input' value={input} onChange={(e) => setInput(e.target.value)} />
    <br />
    <select className={inputClass} onChange={(e) => setdeorencode(e.target.value)}>
        <option value="encode" selected>Encode</option>
        <option value="decode">Decode</option>
    </select>
    <br />
    <input type="text" className={inputClass} placeholder='Output' value={deorencode == "encode" ? btoa(input) : atob(input)} disabled />
  </>)
}
