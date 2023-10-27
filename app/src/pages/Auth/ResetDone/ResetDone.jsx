import React from 'react'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'

export default function EmailVerification() {
  return (
    <div className="bg-white-purple flex h-screen w-full items-center justify-center">
      <div className="mx-4 w-full max-w-[450px] space-y-4 rounded-2xl bg-white p-6 text-center shadow-md sm:p-10">
        <img src="/success.png" className="mx-auto" alt="email" />
        <h3 className="text-xl text-black">Password Reset Done</h3>
        <p className="text-sm text-black/60">
          Now you can access your account.
        </p>
        <Link className="block" to="/login">
          <Button variants={'purple'} name={'Sign In'} />
        </Link>
      </div>
    </div>
  )
}
