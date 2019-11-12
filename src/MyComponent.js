import React from 'react';

export default function MyComponent() {
  const { cat } = props;
  console.log("cat");
  return (
    <div>
      <h1>I was given a {cat}
        !</h1>
    </div>
  )
}


