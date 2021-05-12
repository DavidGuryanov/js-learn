import React from 'react'
import { LayoutWrapper, Picture, BlockPicture } from './styles'
import LoginForm from './components/LoginForm'
import WithTopBar from '../../utils/HOCs/screenWrapper'

const Login = () => {
  return (
    <LayoutWrapper>
      <BlockPicture>
        <Picture />
        <h1>Уроки Java Script</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </BlockPicture>
      <LoginForm />
    </LayoutWrapper>
  )
}

export default WithTopBar(Login)
