import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
  height: 80px;
  background-color: #232323;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px; */
  box-sizing: border-box;
  position: relative;
`

export const NavBar = styled.nav`
  height: 80px;
  background-color: #232323;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`

export const CompanyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(180deg, #198cfe 0%, #5f41d9 100%);
`

export const BrandName = styled.p`
  margin-left: 7px;
`
