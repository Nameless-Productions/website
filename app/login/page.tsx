import { loginForm } from '@/lib/users/login'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (<>
    <div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'>
        <p className='text-xl font-bold'>Login</p>
        <form action={loginForm}>
            <label htmlFor="username">Username:</label>
            <input type="text" className="input" id='username' name='username' required  placeholder='thenamelessdev'/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" className="input" id='password' name='password' required />
            <br />
            <input type="submit" value="Log in" className="greenBtn" />
        </form>
        <br />
        <p>Don't have an account? Register <Link href="/register" className='underline text-blue-500'>Here</Link></p>
    </div>
  </>)
}
