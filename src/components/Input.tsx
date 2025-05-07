import React, { ComponentProps } from 'react'

type InputProps = ComponentProps<"input"> & {
  label?: string
}

const Input = ({label, ...props}: InputProps) => {
  return (
    <div>
      <label htmlFor="label">{label}</label>
      <input id={label} {...props} />
    </div>
  )
}

export default Input