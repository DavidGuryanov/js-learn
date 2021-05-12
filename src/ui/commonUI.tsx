import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  FormGroup,
  Button,
} from '@material-ui/core'

export const SubmitButton = styled(Button)`
  color: #ffffff !important;
  padding: 4px 18px;
  width: ${(props: { btnwidth: number }) => (props.btnwidth ? props.btnwidth : 182)}px;
  height: 40px;
  background: #5f41d9 !important;
  border-radius: 4px;
  align-self: center;
  & span {
    font-family: GolosTextWebRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.5px;
    text-transform: none;
  }
`
