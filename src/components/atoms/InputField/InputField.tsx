import React, { useId } from 'react'
import './InputField.css'

type InputSize = 'sm' | 'md' | 'lg'

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  success?: string
  size?: InputSize
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  hint,
  error,
  success,
  size = 'md',
  className = '',
  id: idProp,
  ...rest
}) => {
  const generatedId = useId()
  const id = idProp ?? generatedId

  const stateClass = error ? 'input-field--error' : success ? 'input-field--success' : ''

  return (
    <div className={`input-field input-field--${size} ${stateClass} ${className}`.trim()}>
      {label && (
        <label className="input-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="input-field__input"
        aria-describedby={error ? `${id}-msg` : hint ? `${id}-msg` : undefined}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
      {error && (
        <span id={`${id}-msg`} className="input-field__message input-field__message--error" role="alert">
          {error}
        </span>
      )}
      {!error && success && (
        <span className="input-field__message input-field__message--success">
          {success}
        </span>
      )}
      {!error && !success && hint && (
        <span id={`${id}-msg`} className="input-field__message input-field__message--hint">
          {hint}
        </span>
      )}
    </div>
  )
}

export default InputField
