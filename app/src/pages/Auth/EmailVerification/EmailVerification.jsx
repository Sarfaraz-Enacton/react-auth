import React from 'react'
import Button from '../../../components/Button'

export default function EmailVerification() {
  return (
    <div className="bg-white-purple flex h-screen w-full items-center justify-center">
      <div className="mx-4 w-full max-w-[450px] space-y-6 rounded-2xl bg-white p-10 text-center shadow-md">
        <img src="/email.svg" className="mx-auto" alt="email" />
        <h3 className="text-xl text-black">Email Verification</h3>
        <p className="text-sm text-black/60">
          We have sent you an email verification to{' '}
          <span className="font-medium text-black">
            jenny.wilson@gmail.com.
          </span>{' '}
          If you didn’t receive it, click the button below.
        </p>
        <Button variants={'light'} name={'Re-Send Email'} />
      </div>
    </div>
  )
}
