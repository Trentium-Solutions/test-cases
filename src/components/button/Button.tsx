import React, {FC, useState} from 'react'
import {ButtonProps} from '../Types'
import './Button.css'

export const Button: FC<ButtonProps> = (props) => {
  const [text, setText] = useState(props.label)
  return (
    <button
      data-testid="button"
      className="button-style"
      onClick={() => {
        setText('You Clicked')
      }}
      name="click"
      type="button"
    >
      Hi {text}
    </button>
  )
}
