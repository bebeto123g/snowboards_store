import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

const Counter = ({ increment, decrement, counter, className }) => {
  return (
    <div
      style={{ width: '120px' }}
      className={`d-flex justify-content-between align-items-center ${className}`}
    >
      <Button onClick={decrement} variant={'warning'}>
        -
      </Button>
      <span>{counter}</span>
      <Button onClick={increment} variant={'success'}>
        +
      </Button>
    </div>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default Counter
