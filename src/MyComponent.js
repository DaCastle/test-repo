import React from 'react'
import FeatureA from './FeatureA'
import FeatureB from './FeatureB'
import styles from './MyComponent.module.css'
import LazyLoad from 'react-lazyload'

export default function MyComponent ({ pet, cat = 'dog' }) {
  function methodDoesNotExist () {
    throw new Error('NEW runtime exception')
  }

  return (
    <div>
      <FeatureA />
      <FeatureB />
      <h1 data-testid='h1tag'>
        I was given a {pet}! And a {cat}
      </h1>
      <button onClick={methodDoesNotExist}>Break the world</button>
      <div className={styles.container}>
        <LazyLoad height={2000} once={true} offset={200}>
          <img alt='kitty' src={'http://placekitten.com/500/2000'} />
        </LazyLoad>
      </div>
    </div>
  )
}
