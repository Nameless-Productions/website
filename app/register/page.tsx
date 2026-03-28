import { createUserForm } from '@/lib/users/createUser'
import { greenBtnClass, inputClass } from '@/vars'
import React from 'react'

export default function RegisterPage() {
  return (<>
    <div className='mx-auto items-center text-center max-w-sm p-5 border-4 rounded-3xl'>
        <p className='text-xl font-bold'>Register</p>
        <form action={createUserForm}>
            <label htmlFor="username">Username:</label>
            <input type="text" className={inputClass} id='username' name='username' required  placeholder='thenamelessdev'/>
            <br />
            <label htmlFor="email">Email address</label>
            <input type="email" className={inputClass} id='email' name='email' placeholder='nameless@thenamelessdev.com' required />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" className={inputClass} id='password' name='password' required />
            <br />
            <input type="submit" value="Register" className={greenBtnClass} />
        </form>
    </div>
  </>)
}
