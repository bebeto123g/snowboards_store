import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Row } from 'react-bootstrap'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import { showAlert } from '../store/alert/alertActions'

const HomePage = () => {
  const dispatch = useDispatch()

  const testHandler = useCallback(() => {
    dispatch(
      showAlert(
        'success',
        'ТЕСТОВОЕ СООБЩЕНИЕ! /run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx/run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx/run/media/bebeto/documents/web/REACT/snowboards_store/src/page/HomePage.jsx'
      )
    )
  }, [dispatch])

  return (
    <Page>
      <PageHeader>Домашняя страница</PageHeader>
      <Row>
        <Button variant={'outline-success'} onClick={testHandler}>
          Test button
        </Button>
      </Row>
    </Page>
  )
}

export default HomePage
