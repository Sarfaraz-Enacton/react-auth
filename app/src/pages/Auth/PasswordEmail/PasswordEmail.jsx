import React from 'react'

export default function EmailVerification() {
  return (
    <div className="bg-white-purple flex h-screen w-full items-center justify-center">
      <div className="mx-4 w-full max-w-[450px] space-y-4 rounded-2xl bg-white p-6 text-center shadow-md sm:p-10">
        <img src="/success.png" className="mx-auto" alt="email" />
        <h3 className="text-xl text-black">Successfully Sent</h3>
        <p className="text-sm text-black/60">
          We have sent instructions on how to reset your password to{' '}
          <span className="font-medium text-black">
            jenny.wilson@gmail.com.
          </span>{' '}
          Please follow the instructions from the email.
        </p>
      </div>
    </div>
  )
}
