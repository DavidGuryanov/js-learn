import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { HomeScreen } from '../src/components/homeScreen'
import Courses from './components/Courses'
import Course from './components/Courses/Course'
import Task from './components/Task/Task'
import Login from './components/Login'
import WithTopBar from './utils/HOCs/screenWrapper'
import { Wrapper, Content } from './styles'

import './utils/GolosText/Golos-Text_Regular.css'

const theme = {
  mainColor: '#333333',
  textColor: 'green',
}

function App() {
  // console.log(useSelector((state) => state))
  return (
    // <ThemeProvider theme={theme}>
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          {/* <Route path="/" exact component={HomeScreen} /> */}
          <Route path="/" exact component={Login} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/courses/:course" exact component={Course} />
          <Route path="/courses/:course/:id" exact component={Task} />
        </Switch>
      </Router>
    </Wrapper>
    // </ThemeProvider>
  )
}

export default App
