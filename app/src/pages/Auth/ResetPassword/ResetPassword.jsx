import React from 'react'
import FormInput from '../../../components/FormInput'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import { Formik, Field, Form } from 'formik'
import { object, string, ref, boolean } from 'yup'

export default function Signup() {
  const resetPasswordValidationSchema = object({
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('password is required'),
    rptpassword: string()
      .oneOf([ref('password'), null], 'password must match')
      .required('password is required'),
  })

  return (
    <div className="bg-white-purple flex h-screen w-full items-center justify-center">
      <div className="mx-6 w-full max-w-[450px] rounded-2xl bg-white p-6 sm:shadow-card">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black sm:text-3xl">
            Reset Password
          </h2>
          <p className="text-sm text-gray-dark">Enter your new password.</p>
        </div>
        <div className="pt-6 sm:pt-10">
          <Formik
            initialValues={{
              password: '',
              rptpassword: '',
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
            validationSchema={resetPasswordValidationSchema}
          >
            {() => (
              <Form className="space-y-6">
                <FormInput
                  label={'New Password'}
                  name={'password'}
                  type={'password'}
                  placeholder={'••••••••••••'}
                />
                <FormInput
                  label={'Repeat New Password'}
                  name={'rptpassword'}
                  type={'rptpassword'}
                  placeholder={'••••••••••••'}
                />
                <Button
                  type="submit"
                  name={'Reset Password'}
                  variants={'gray'}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
