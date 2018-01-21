import React from 'react'
import { range } from 'lodash-es'
import Timer from './Timer'

export default () => (
  <div>
    <Timer id={-1} delay={10} />
    {range(100).map(index =>
      <Timer key={index} id={index} delay={Math.ceil(1000 * Math.random())} />
    )}
  </div>
)
