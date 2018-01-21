import React from 'react'
import { range } from 'lodash-es'
import Timer from './Timer'

export default () => (
  <div>
    <Timer delay={10} />
    {range(100).map(index =>
      <Timer key={index} delay={Math.ceil(1000 * Math.random())} />
    )}
  </div>
)
