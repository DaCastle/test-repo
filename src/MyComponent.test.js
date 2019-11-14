import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MyComponent from './MyComponent'

afterEach(cleanup)

it('renders with a cat', () => {
  const { getByRole } = render(<MyComponent pet={'cat'} />)
  expect(getByRole('heading')).toHaveTextContent('I was given a cat! And a dog')
})

it('renders with a cat and turtle', () => {
  const { getByRole } = render(<MyComponent pet={'cat'} cat={'turtle'} />)
  expect(getByRole('heading')).toHaveTextContent(
    'I was given a cat! And a turtle'
  )
})
