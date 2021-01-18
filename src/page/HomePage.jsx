import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Home = styled.div`
  color: red;
`

const HomePage = () => {
  return (
    <Home>
      <h1>home page</h1>
      <Button variant={'warning'}>Test</Button>
    </Home>
  )
}

export default HomePage
