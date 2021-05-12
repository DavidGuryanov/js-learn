import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PreFormattedText = styled.p`
  white-space: pre-line;
`

export const NavButton = styled(Link)`
  width: 150px;
  background-color: lightcoral;
  opacity: ${(props: { disabled: boolean }) => props.disabled && '0.5'};
  pointer-events: ${(props: { disabled: boolean }) => props.disabled && 'none'}};
`
