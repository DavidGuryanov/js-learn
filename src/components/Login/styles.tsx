import styled from 'styled-components'

import pic from './4png.png'

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`

export const Picture = styled.div`
  background: center / contain no-repeat url(${pic});
  width: 100%;
  height: 100%;
`

export const BlockPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`
