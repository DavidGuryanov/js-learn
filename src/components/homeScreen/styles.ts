import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h1`
  font-size: 5em;
  color: #000000;
  margin: 10px;
`

export const Subtitle = styled.h2`
  font-size: 3em;
  color: #000000;
  margin: 10px 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const BeginButton = styled(Link)`
  width: 100px;
  height: 100px;
  background-color: teal;
  border-radius: 50%;
  color: white;
  outline: none;
  border: none;
`

export const ButtonText = styled.p`
  text-align: center;
  padding-top: 35%;
`
