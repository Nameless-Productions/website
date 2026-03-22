"use client"

import React, { useState } from 'react'



export default function CursedCalculator() {

    const [result, setResult] = useState("");

    function handleEquals(){
        setResult("Loading...");
        setTimeout(() => {
            setResult("Observing numbers...");
            setTimeout(() => {
                setResult("Almost there...");
                setTimeout(() => {
                    setResult(Math.floor(Math.random() * 200).toString())
                }, 3000);
            }, 3000);
        }, 3000);
    }

  return (<>
    <p className='text-lg font-bold'>Cursed Calculator</p>
    
    <br />

    <div className='flex justify-center items-center'>
        <div className='border-2 border-black rounded-2xl w-100 h-160 bg-gray-700 flex flex-col'>

            <p className='border border-black bg-black m-3 mb-0 rounded-xl h-20 flex items-center justify-center text-3xl font-bold'>{result || "Enter a number"}</p>

            <div className='bg-gray-900 rounded-xl m-3 p-3 grow grid grid-cols-3 gap-3 content-evenly'>

                <NumberBtn number='+' result={result} setResult={setResult}/>
                <NumberBtn number='-' result={result} setResult={setResult}/>
                <NumberBtn number='*' result={result} setResult={setResult}/>


                <NumberBtn number='1' result={result} setResult={setResult}/>
                <NumberBtn number='2' result={result} setResult={setResult}/>
                <NumberBtn number='3' result={result} setResult={setResult}/>
                <NumberBtn number='4' result={result} setResult={setResult}/>
                <NumberBtn number='5' result={result} setResult={setResult}/>
                <NumberBtn number='6' result={result} setResult={setResult}/>
                <NumberBtn number='7' result={result} setResult={setResult}/>
                <NumberBtn number='8' result={result} setResult={setResult}/>
                <NumberBtn number='9' result={result} setResult={setResult}/>
                <NumberBtn number='0' result={result} setResult={setResult}/>

                <button className='border-2 border-black p-6 rounded-xl bg-gray-500 cursor-pointer hover:bg-gray-600 transition-all duration-300'><p className='text-3xl font-bold' onClick={() => setResult("")}>Cls</p></button>

                <button className='border-2 border-black p-6 rounded-xl bg-gray-500 cursor-pointer hover:bg-gray-600 transition-all duration-300'><p className='text-3xl font-bold' onClick={handleEquals}>=</p></button>
                
            </div>

        </div>
    </div>
  </>)
}


function NumberBtn({ number, result, setResult }: { number: string, result: any, setResult: any }) {

    function handleClick(thing: string){
        setResult((r: string) => r + thing);
    }

  return (
    <button className='border-2 border-black p-6 rounded-xl bg-gray-600 cursor-pointer hover:bg-gray-700 transition-all duration-300'><p className='text-3xl font-bold' onClick={() => handleClick(number)}>{number}</p></button>
  )
}
