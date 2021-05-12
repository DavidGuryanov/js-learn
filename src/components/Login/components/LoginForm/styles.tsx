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

export const FormWrapper = styled.div`
  /* min-width: 551px; */
  max-width: 50%;
  height: 660px;
  left: 785px;
  top: 220px;
  background: #232323;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  box-sizing: border-box;
`

export const Header = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  /* identical to box height, or 107% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.5px;
  align-self: center;
  /* Gray 6 */
  color: #f2f2f2;
`

export const Subheader = styled.p`
  font-size: 16px;
  line-height: 32px;
  align-self: center;
  //display: flex;
  //align-items: center;
  //text-align: center;
  letter-spacing: -0.5px;
  color: #f2f2f2;
  opacity: 0.7;
  margin-bottom: 34px;
`

export const Link = styled.a`
  color: #bb6bd9;
  text-decoration: underline;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const StyledTextField = styled(TextField)`
  margin-bottom: 30px !important;
  //background-color: #333333;
  //background: #ffffff;
  color: #f2f2f2;
  //opacity: 0.1;
  & label {
    color: #f2f2f2 !important;
  }
  & div {
    background-color: #393939 !important;
    color: #f2f2f2;
    &:after {
      border-bottom: 2px solid #bb6bd9;
    }
  }
  & div:active {
    background-color: #393939;
  }
  & div:hover {
    background-color: #393939;
  }
`
export const SubmitButton = styled(Button)`
  color: #ffffff !important;
  padding: 4px 18px;
  width: 182px;
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
