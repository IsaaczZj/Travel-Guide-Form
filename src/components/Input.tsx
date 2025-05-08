import React, { ComponentProps } from 'react'

type InputProps = ComponentProps<"input"> & {
  label?: string
}

const Input = ({label, ...props}: InputProps) => {
  return (
    <div className='flex flex-col w-80'>
      <label className='font-light text-green-950 ' htmlFor="label">{label}</label>
      <input className='outline-0 border-b-2 px-2 border-emerald-700 text-green-950' id={label} {...props} />
    </div>
  )
}

export default Input