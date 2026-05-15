import React, { useId } from 'react'
import './Input.css'

export type InputState = 'default' | 'focus' | 'error'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  state?: InputState
  errorMessage?: string
  size?: 'sm' | 'md' | 'lg'
}

const Input: React.FC<InputProps> = ({
  label,
  state = 'default',
  errorMessage,
  size = 'md',
  id: idProp,
  ...rest
}) => {
  const generatedId = useId()
  const id = idProp ?? generatedId

  // errorMessage implies error state regardless of explicit state prop
  const resolvedState: InputState = errorMessage ? 'error' : state

  return (
    <div className={`input input--${resolvedState} input--${size}`}>
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="input__field"
        aria-invalid={resolvedState === 'error' || undefined}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        {...rest}
      />
      {resolvedState === 'error' && errorMessage && (
        <span
          id={`${id}-error`}
          className="input__message input__message--error"
          role="alert"
        >
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Input
