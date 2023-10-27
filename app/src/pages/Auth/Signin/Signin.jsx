import React from 'react'
import FormInput from '../../../components/FormInput'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import { Formik, Field, Form } from 'formik'
import { object, string, ref, boolean } from 'yup'

export default function Signup() {
  const signupValidationSchema = object({
    email: string().email('Email is invalid').required('Email is required'),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('password is required'),
  })

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="w-full max-w-[450px] rounded-2xl bg-white p-6 sm:shadow-card">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black sm:text-3xl">
            Welcome to Crypto App
          </h2>
          <p className="text-sm text-gray-dark">
            Enter your credentials to access the account.
          </p>
        </div>
        <div className="pt-6 sm:pt-10">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form className="space-y-6">
                <FormInput
                  label={'Email'}
                  name={'email'}
                  type={'email'}
                  placeholder={'name@email.com'}
                />
                <FormInput
                  label={'Password'}
                  name={'password'}
                  type={'password'}
                  placeholder={'••••••••••••'}
                />
                <div className="flex justify-between">
                  <Field name="remember-me-checkbox">
                    {({ field, meta }) => (
                      <div className="">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="remember-me-checkbox"
                            id="remember-me-checkbox"
                            {...field}
                          />
                          <label
                            className="text-sm text-gray-dark"
                            htmlFor="remember-me-checkbox"
                          >
                            Remember me
                          </label>
                        </div>
                        {meta.error && meta.touched && (
                          <p className="text-xs text-red-500">{meta.error}</p>
                        )}{' '}
                      </div>
                    )}
                  </Field>
                  <Link to={'/forgot-password'} className="text-sm text-purple">
                    Forgot Password?
                  </Link>
                </div>
                <Button type="submit" name={'Log In'} variants={'gray'} />
                <Link className="!mt-3 block" to={'/signup'}>
                  <Button
                    type="submit"
                    name={'Create New Account'}
                    variants={'gray'}
                  />
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
