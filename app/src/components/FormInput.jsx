import { Field } from 'formik'
import React from 'react'
export default function FormInput({
  label,
  type,
  placeholder,
  name,
  customClass,
  ...rest
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-black">
        {label}
      </label>
      <Field name={name}>
        {({ field, meta }) => (
          <div className="space-y-2">
            <input
              id={name}
              type={type}
              placeholder={placeholder}
              name={name}
              // className={`w-full rounded-lg border border-gray-light px-3 py-2 placeholder:text-sm placeholder:text-gray-dark ${customClass}`}
              className={`w-full rounded-lg border border-gray-light px-3 py-2 placeholder:text-sm placeholder:text-gray-dark ${customClass} ${
                meta.error && meta.touched ? 'is-invalid' : ''
              }`}
              autoComplete="on"
              {...rest}
              {...field}
              // isinvalid={!!(meta.error && meta.touched)}
            />
            {meta.error && meta.touched && (
              <p className="text-xs text-red-500">{meta.error}</p>
            )}
          </div>
        )}
      </Field>
    </div>
  )
}
