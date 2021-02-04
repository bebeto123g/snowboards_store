import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button, Form, FormControl } from 'react-bootstrap'

const LineSearch = ({ submit, variant = 'success' }) => {

  const submitHandler = (e) => {
    e.preventDefault()
    let value = e.target.firstChild.value.trim()
    if (!value) return
    submit(value)
  }

  useEffect(() => {
    console.log('LineSearch')
  })

  return (
    <Form inline onSubmit={submitHandler} className="mr-5">
      <FormControl type="text" placeholder="Поиск" className="mr-2 mb-2 mb-sm-0" />
      <Button type="submit" variant={variant}>
        Поиск
      </Button>
    </Form>
  )
}

LineSearch.propTypes = {
  submit: PropTypes.func.isRequired,
  variant: PropTypes.string,
}

export default LineSearch
