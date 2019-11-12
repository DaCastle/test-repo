import React from 'react'

export default function MyComponent (props) {
  const { pet } = props

  function methodDoesNotExist () {
    throw new Error('UPDATED runtime exception')
  }

  return (
    <div>
      <h1>I was given a {pet}!</h1>
      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  )
}
