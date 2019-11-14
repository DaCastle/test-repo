import React, { useState, useEffect } from 'react'
import db from './firebase'

export default function FeatureA () {
  const [active, isActive] = useState(false)

  useEffect(() => {
    db.collection('featureToggles')
      .doc('features')
      .get()
      .then(doc => {
        isActive(doc.data().FeatureA)
      })
  })

  if (active) {
    return <div>I am Feature 'A' : Toggled on! {active.toString()}</div>
  }
  return <div>I am Feature 'A' : Toggled off!</div>
}
