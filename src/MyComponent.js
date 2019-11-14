import React from 'react'
import FeatureA from './FeatureA'
import FeatureB from './FeatureB'
import styles from './MyComponent.module.css'
import LazyLoad from 'react-lazyload'

export default function MyComponent (props) {
  const { pet } = props

  function methodDoesNotExist () {
    throw new Error('NEW runtime exception')
  }

  return (
    <div>
      <FeatureA />
      <FeatureB />
      <h1>I was given a {pet}!</h1>
      <button onClick={methodDoesNotExist}>Break the world</button>
      <div className={styles.container}>
        <LazyLoad height={200}>
          {' '}
          <img alt='kitty' src={'http://placekitten.com/500/200'} />
        </LazyLoad>
      </div>
    </div>
  )
}
