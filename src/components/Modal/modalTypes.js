import ModalLogin from './ModalAuth/ModalLogin'
import ModalLogout from './ModalAuth/ModalLogout'
import ModalRegister from './ModalAuth/ModalRegister'
import ModalOrder from './ModalOrder/ModalOrder'
import ModalStatusOrder from './ModalStatusOrder/ModalStatusOrder'

export const ModalTypes = [
  { typeModal: 'login', Component: ModalLogin },
  { typeModal: 'logout', Component: ModalLogout },
  { typeModal: 'register', Component: ModalRegister },
  { typeModal: 'order', Component: ModalOrder },
  { typeModal: 'status_order', Component: ModalStatusOrder },
]
