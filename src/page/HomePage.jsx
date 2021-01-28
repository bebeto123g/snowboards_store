import React from 'react'
import styled from 'styled-components'
import { Button, Row } from 'react-bootstrap'
import PageHeader from '../UI/PageHeader'

const Home = styled.div`
  color: red;
`

const HomePage = () => {
  return (
    <>
      <PageHeader>Домашняя страница</PageHeader>
      <Row>
        <Button variant={'outline-success'}>Test button</Button>
      </Row>
    </>
  )
}

export default HomePage
