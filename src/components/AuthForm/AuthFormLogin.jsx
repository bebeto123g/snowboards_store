import React from 'react'

import FormGroup from './FormGroup'

const AuthFormLogin = () => {
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
    </>
  )
}

export default AuthFormLogin
