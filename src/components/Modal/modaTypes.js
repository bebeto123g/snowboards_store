import ModalLogin from './ModalAuth/ModalLogin'
import ModalLogout from './ModalAuth/ModalLogout'
import ModalRegister from './ModalAuth/ModalRegister'

export const ModalTypes = [
  { typeModal: 'login', Component: ModalLogin },
  { typeModal: 'logout', Component: ModalLogout },
  { typeModal: 'register', Component: ModalRegister },
]