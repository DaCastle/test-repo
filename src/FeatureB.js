import React, { useState, useEffect } from 'react'
import db from './firebase'

export default function FeatureB () {
  const [active, isActive] = useState(false)
  useEffect(() => {
    db.collection('featureToggles')
      .doc('features')
      .get()
      .then(doc => {
        isActive(doc.data().FeatureB)
      })
  })
  return <div>I am Feature 'B': Toggled on? {active.toString()}</div>
}
