import React from 'react'
import { useSelector } from 'react-redux'

import { Row, Table } from 'react-bootstrap'

import PageHeader from '../UI/PageHeader'
import Page from '../hoc/Page'
import ButtonToRoute from '../UX/Routes/ButtonToRoute'

const ProfilePage = () => {
  const { email, name, tel, register } = useSelector(
    (state) => state.auth.profile
  )

  return (
    <Page>
      <PageHeader>Профиль</PageHeader>
      <Row>
        <Table striped bordered hover variant="warning">
          <thead>
            <tr>
              <th>Имя</th>
              <td colSpan="2">{name}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Почтовый адрес</th>
              <td colSpan="2">{email}</td>
            </tr>
            <tr>
              <th>Телефон</th>
              <td colSpan="2">{tel}</td>
            </tr>
            <tr>
              <th>Дата регистрации</th>
              <td colSpan="2">{new Date(register).toLocaleString()}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <ButtonToRoute to={'/orders'} variant={'info'} className={'ml-auto'}>
          История заказов
        </ButtonToRoute>
      </Row>
    </Page>
  )
}

export default ProfilePage
