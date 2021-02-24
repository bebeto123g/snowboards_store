export const useValidateForm = (form) => {

  const { email, password, tel, userName } = form

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email && re.test(String(email).toLowerCase())
  }

  const validatePhone = () => {
    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    return tel && re.test(String(tel).toLowerCase())
  }

  const validateUserName = () => {
    const re = /^[А-я\s]+$/u
    return (
      userName &&
      re.test(String(userName).toLowerCase()) &&
      userName.length > 2 &&
      userName.length < 20
    )
  }

  const validatePassword = () => {
    return password && password.length > 5
  }

  const registerValidate = () => {
    return (
      validatePassword() &&
      validateUserName() &&
      validatePhone() &&
      validateEmail()
    )
  }

  const loginValidate = () => validatePassword() && validateEmail()

  let errors

  if (!registerValidate() && tel && userName) {
    errors = {
      email: validateEmail() ? '' : 'Неверный формат email адреса',
      password: validatePassword() ? '' : 'Пароль должен быть минимум 6 символов',
      tel: validatePhone() ? '' : 'Неверный формат телефона',
      userName: validateUserName() ? '' : 'Только Кириллица от 3 до 20 символов',
    }
  } else if (!loginValidate()) {
    errors = {
      email: validateEmail() ? '' : 'Неверный формат email адреса',
      password: validatePassword() ? '' : 'Пароль должен быть минимум 6 символов'
    }
  } else {
    errors = null
  }

  return { errors, registerValidate, loginValidate }
}
