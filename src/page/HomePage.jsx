import React from 'react'
import { Button, Row } from 'react-bootstrap'
import PageHeader from '../UI/PageHeader'
import { useDispatch } from 'react-redux'
import { showAlert } from '../store/alert/alertActions'


const HomePage = () => {
  const dispatch = useDispatch()
  const testHandler = () => {
    dispatch(showAlert('success', 'ТЕСТОВОЕ СООБЩЕНИЕ! /run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx/run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx/run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx'))
  }

  return (
    <>
      <PageHeader>Домашняя страница</PageHeader>
      <Row>
        <Button variant={'outline-success'} onClick={testHandler}>Test button</Button>
      </Row>
    </>
  )
}

export default HomePage
