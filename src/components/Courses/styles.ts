import styled from 'styled-components'
import { Link } from 'react-router-dom'
import pic from './img/Vector.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CurrentLessonBlock = styled.div`
  width: 100%;
  background-color: #232323;
  padding: 20px 40px;
  height: fit-content;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
`

export const ProgressNotification = styled.h6`
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #f2f2f2;
  opacity: 0.5;
`

export const LessonTitle = styled.h3`
  font-style: normal;
  margin: 5px 0 20px 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #f2f2f2;
`

export const LessonTLDR = styled.p`
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.5px;
  color: #f2f2f2;
  margin-bottom: 20px;
`

export const AllLessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const LessonCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232323;
  flex-basis: 269px;
  height: 353px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`

export const LessonPictureBlock = styled.div`
  height: 140px;
  background: url(${pic}) no-repeat center #1d1a1a; ;
`

export const LessonDescriptionBlock = styled.div`
  /* width: 269px; */
  /* height: 200px; */
  padding: 15px 20px;
`

export const LessonCardTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.5px;
  color: #f2f2f2;
  margin-bottom: 10px;
`

export const LessonLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.5px;
  color: #b49aff;
  margin: auto 20px 18px 20px;
  /* margin-top: auto; */
`
export const LessonTag = styled.div`
  position: absolute;
  width: 76px;
  height: 20px;
  top: 26px;
  background: #4d2bdb;
  top: 26px;
`
