import React from 'react'
import FormInput from '../../../components/FormInput'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import { Formik, Field, Form } from 'formik'
import { object, string, ref, boolean } from 'yup'

export default function Signup() {
  const signupValidationSchema = object({
    name: string().required('Name is required'),
    surname: string().required('Surname is required'),
    email: string().email('Email is invalid').required('Email is required'),
    password: string()
      .min(6, 'Password must be at least 6 characters')
      .required('password is required'),
    rptpassword: string()
      .oneOf([ref('password'), null], 'password must match')
      .required('Repeat password is required'),
    checkbox: boolean()
      .oneOf([true], 'You must agree to the Terms & Conditions')
      .required('You must agree'),
  })

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="w-full max-w-[450px] rounded-2xl bg-white p-6 sm:shadow-card">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-black sm:text-3xl">
            Welcome to Crypto App
          </h2>
          <p className="text-sm text-gray-dark">
            Create a free account by filling data below.
          </p>
        </div>
        <div className="pt-6 sm:pt-10">
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              password: '',
              rptpassword: '',
              checkbox: false,
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label={'Name'}
                    name={'name'}
                    type={'text'}
                    placeholder={'James'}
                  />
                  <FormInput
                    label={'Surname'}
                    name={'surname'}
                    type={'text'}
                    placeholder={'Arthur'}
                  />
                </div>
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
                <FormInput
                  label={'Repeat Password'}
                  name={'rptpassword'}
                  type={'password'}
                  placeholder={'••••••••••••'}
                />
                <Field name="checkbox">
                  {({ field, meta }) => (
                    <div className="">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="signup-checkbox"
                          // isinvalid={false}
                          {...field}
                        />
                        <label
                          className="text-sm text-gray-dark"
                          htmlFor="signup-checkbox"
                        >
                          I agree with{' '}
                          <Link to="/terms" className="text-purple">
                            Terms & Conditions.
                          </Link>
                        </label>
                      </div>
                      {meta.error && meta.touched && (
                        <p className="text-xs text-red-500">{meta.error}</p>
                      )}{' '}
                    </div>
                  )}
                </Field>
                <Button
                  type="submit"
                  name={'Create Account'}
                  variants={'gray'}
                />
                <p className="text-center text-xs font-medium text-gray-dark/60">
                  Already have an account?{' '}
                  <Link to={'/login'} className="text-purple">
                    Log In
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
