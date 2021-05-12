import React from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { tasksArray } from './data'

const Course = (props: any) => {
  console.log(props.location.pathname)
  const thisCourse = props.location.pathname.split('/')[2]
  const relevantTasks = tasksArray.find((element: any) => element.course === thisCourse)
  console.log(relevantTasks)
  tasksArray.forEach((el) => {
    // console.log(el)
  })
  return (
    <Wrapper>
      {relevantTasks &&
        relevantTasks.tasks.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`${thisCourse}/${el.id}`}>{el.title}</Link>
            </div>
          )
        })}
    </Wrapper>
  )
}

export default Course
