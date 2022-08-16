import React, {FC} from 'react'
import {ButtonProps} from '../Types'
import './Button.css'

export const Button: FC<ButtonProps> = (props) => {
  return (
    <div data-testid="button" className="button-style">
      Hi {props.label}
    </div>
  )
}
