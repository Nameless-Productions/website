import { createUserForm } from '@/lib/users/createUser'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (<>
    <div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'>
        <p className='text-xl font-bold'>Register</p>
        <form action={createUserForm}>
            <label htmlFor="username">Username:</label>
            <input type="text" className="input" id='username' name='username' required  placeholder='thenamelessdev'/>
            <br />
            <label htmlFor="email">Email address</label>
            <input type="email" className="input" id='email' name='email' placeholder='nameless@thenamelessdev.com' required />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" className="input" id='password' name='password' required />
            <br />
            <input type="submit" value="Register" className="greenBtn" />
        </form>
        <br />
        <p>Have an account? Log in <Link href="/login" className='underline text-blue-500'>Here</Link></p>
    </div>
  </>)
}
