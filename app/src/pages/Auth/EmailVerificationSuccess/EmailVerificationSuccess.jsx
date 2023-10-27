import React from 'react'
import Button from '../../../components/Button'

export default function EmailVerification() {
  return (
    <div className="bg-white-purple flex h-screen w-full items-center justify-center">
      <div className="mx-4 w-full max-w-[450px] space-y-6 rounded-2xl bg-white p-10 text-center shadow-md">
        <img src="/success.png" className="mx-auto" alt="email" />
        <h3 className="text-xl text-black">Successfully Registration</h3>
        <p className="text-sm text-black/60">
          Hurray! You have successfully created your account. Enter the app to
          explore all it’s features.
        </p>
        <Button variants={'purple'} name={'Enter the App'} />
      </div>
    </div>
  )
}
