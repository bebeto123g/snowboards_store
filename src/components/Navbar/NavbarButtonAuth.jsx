import React from 'react'
import { useSelector } from 'react-redux'

import ButtonShowModal from '../../UX/Modal/ButtonShowModal'

const NavbarButtonAuth = () => {
  const { isLogin } = useSelector((state) => state.isLogin)


  return (
    <>
      {isLogin ? (
        <ButtonShowModal type={'logout'} variant={'danger'}>Выйти</ButtonShowModal>
      ) : (
        <ButtonShowModal type={'login'} variant={'info'}>Войти</ButtonShowModal>
      )}
    </>
  )
}

export default NavbarButtonAuth
