import {cleanup, render} from '@testing-library/react'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import {createRoot} from 'react-dom/client'
import {Button} from '../Button'

afterEach(cleanup)
it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)
  root.render(<Button label="Click Me"></Button>)
})
it('renders button correctly', () => {
  const {getByTestId} = render(<Button label="Click Me"></Button>)
  expect(getByTestId('button')).toHaveTextContent('Click Me')
})

it('renders button correctly', () => {
  const {getByTestId} = render(<Button label="Save"></Button>)
  expect(getByTestId('button')).toHaveTextContent('Save')
})

it('matches snapshot 1', () => {
  const tree = TestRenderer.create(<Button label="Click Me"></Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
it('matches snapshot 2', () => {
  const tree = TestRenderer.create(<Button label="Save"></Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
