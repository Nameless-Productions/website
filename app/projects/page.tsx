import Link from 'next/link'
import React from 'react'

export default function ProjectsPage() {
  return (<>
    <ul className='list-disc list-inside'>
        <li><Link href="/projects/cursed-calculator" className="underline text-blue-500">Cursed calculator</Link></li>
    </ul>
  </>)
}
