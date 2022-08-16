import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import {createRoot} from 'react-dom/client'
import {Button} from './components/button/Button'

it('renders app', () => {
  render(<App />)
})
it('renders the button component correctly', () => {
  const container = document.createElement('div')
  const root = createRoot(container)
  root.render(<Button label="Click Me"></Button>)
})
it('renders button correctly', () => {
  const component = render(<App />)
  const buttonElement = component.getByTestId('button')
  expect(buttonElement).toHaveTextContent('Hi Click Me')
})
