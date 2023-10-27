import { Formik, Form } from 'formik'
import React from 'react'
import FormInput from '../../../components/FormInput'
import Button from '../../../components/Button'
import { object, string } from 'yup'

export default function ForgotPassword() {
  const PasswordValidationSchema = object({
    email: string().email().required('Email is required'),
  })
  return (
    <div className="bg-white-purple flex h-screen w-full items-center justify-center">
      <div className="mx-4 w-full max-w-[450px] space-y-8 rounded-2xl bg-white p-6 shadow-md sm:p-10">
        <div className="space-y-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.10267 11.4797C3.17005 11.316 3.26868 11.1683 3.39063 11.0455L9.12933 5.2638C9.48547 4.905 10.0549 4.91324 10.4012 5.28222C10.7475 5.6512 10.7396 6.24118 10.3835 6.59998L5.94312 11.0736L20.1058 11.0735C20.5996 11.0735 21 11.4883 21 12C21 12.5117 20.5996 12.9265 20.1058 12.9265L5.94317 12.9265L10.3835 17.4C10.7396 17.7588 10.7475 18.3488 10.4012 18.7178C10.0549 19.0868 9.48547 19.095 9.12933 18.7362L3.39003 12.9539C3.26817 12.8312 3.17009 12.6841 3.10267 12.5203C3.03512 12.3562 3 12.1793 3 12C3 11.8207 3.03512 11.6438 3.10267 11.4797Z"
                fill="#171717"
              />
            </svg>
          </div>
          <h3 className="text-3xl text-black">Forgot Password</h3>
          <p className="text-sm text-black/60">
            Enter your email address for which account you want to reset your
            password.
          </p>
        </div>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={PasswordValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {() => (
            <Form className="space-y-6">
              <FormInput
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Button type="submit" name="Reset Password" variants="gray" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
