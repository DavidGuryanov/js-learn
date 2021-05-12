import React from 'react'

import { Title, Subtitle, Wrapper, BeginButton, ButtonText } from './styles'

export const HomeScreen = () => {
  return (
    <Wrapper>
      <Title>JSLearn</Title>
      <Subtitle>Your future starts here</Subtitle>
      <BeginButton to="/courses">
        <ButtonText>Begin</ButtonText>
      </BeginButton>
    </Wrapper>
  )
}
