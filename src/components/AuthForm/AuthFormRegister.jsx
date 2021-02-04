import React from 'react'

import FormGroup from './FormGroup'

const AuthFormRegister = () => {
  return (
    <>
      <FormGroup
        label={'Email адрес'}
        type={'email'}
        text={'Никогда не делись своей электронной почтой с кем-либо еще.'}
      />
      <FormGroup
        label={'Введите пароль'}
        type={'password'}
        text={'Никому не передавайте свой пароль'}
      />
      <FormGroup
        label={'Как вас зовут?'}
        type={'userName'}
        text={'Введите имя, по которому мы сможем к вам обращаться'}
      />
      <FormGroup
        label={'Введите телефон для связи'}
        type={'tel'}
        text={'Мы отправим вам СМС с уведомлением о статусе заказа'}
      />
    </>
  )
}

export default AuthFormRegister
