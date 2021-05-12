import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  FormWrapper,
  Header,
  Subheader,
  Link,
  StyledForm,
  StyledTextField,
  SubmitButton,
} from './styles'

import { Formik, Field } from 'formik'

const LoginForm = () => {
  const history = useHistory()
  return (
    <FormWrapper>
      <Header>Зарегистрироваться</Header>
      <Subheader>
        Уже есть аккаунт? <Link>Войти</Link>
      </Subheader>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500))
          // alert(JSON.stringify(values, null, 2))
          history.push('/courses')
        }}
      >
        <StyledForm>
          <Field
            id="firstName"
            name="firstName"
            placeholder="Ваше имя"
            as={StyledTextField}
            label="Ваше имя"
            variant={'filled'}
          />
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            as={StyledTextField}
            label="Email"
            variant={'filled'}
          />{' '}
          <Field
            id="lastName"
            name="lastName"
            placeholder="Doe"
            as={StyledTextField}
            label="Пароль"
            variant={'filled'}
          />
          <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
        </StyledForm>
      </Formik>
    </FormWrapper>
  )
}

export default LoginForm
