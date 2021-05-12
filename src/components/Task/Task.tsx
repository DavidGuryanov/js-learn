import React, { ChangeEvent, useRef, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { interpretTheCode } from '../../utils/tests'
import { tasksArray } from '../Courses/Course/data'
import { assert } from 'chai'
import { CodeEditor } from '../../utils/editor/Editor'
import { Iframe } from '../Iframe'
import { Test } from '../Test'
import { PreFormattedText, NavButton } from './styles'
import WithTopBar from '../../utils/HOCs/screenWrapper'

interface IState {
  name: string
  message: string
}
interface RouteParams {
  id: string
  course: string
}

const Task = (props: any): JSX.Element => {
  const getParams: RouteParams = useParams()
  const params = getParams
  // if (getParams) {
  //   const params = getParams
  // }
  console.log(getParams.id)

  const history = useHistory()
  const location = useLocation()
  // const
  const [status, setStatus] = useState('standby')
  const [error, setError] = useState<IState | null>(null)
  const thisCourse = location.pathname.split('/')[2]
  const relevantTasks = tasksArray.find((element: any) => element.course === thisCourse)!.tasks
  const relevantData = relevantTasks[Number(params.id) - 1]
  const tryCode = (code: string, taskId: number) => {
    try {
      // const test = eval(code)
      const tried = interpretTheCode(code, taskId)
      console.log(tried, '+')
      if (tried) {
        setStatus('completed')
        setError(null)
      } else {
        setStatus('error')
        setError(null)
        console.log(error, 'shrek')
      }
    } catch (e) {
      setStatus('error')
      setError(e)
      console.error(e)
    }
  }

  const editorRef = useRef(null)

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor
  }

  function showValue() {
    if (editorRef !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const code = editorRef.current.getValue()
      tryCode(code, relevantData.id)
      // alert(editorRef.current.getValue())
    }
  }

  const isDisabled = (num: number): boolean => {
    if (num < 1 || num > relevantTasks[relevantTasks.length - 1].id) {
      return true
    }
    return false
  }

  return (
    <div>
      {relevantData.title}
      <br />
      {relevantData.type === 'lection' && relevantData.video && <Iframe src={relevantData.video} />}
      <br />
      <br />
      {relevantData.type === 'task' && relevantData.code && (
        <>
          <PreFormattedText>{relevantData.text}</PreFormattedText>
          <CodeEditor defaultCode={relevantData.code} onMount={handleEditorDidMount} />
          <button type={'submit'} onClick={showValue}>
            Submit
          </button>

          {status === 'standby' && <p>Waiting</p>}
          {status === 'completed' && <p>Congratulations</p>}
          {status === 'error' && <p>Wrong. You failed miserably</p>}
          {error && (
            <p>
              {error.name}:{error.message}
            </p>
          )}
        </>
      )}
      {relevantData.type === 'test' && <Test data={relevantData} />}
      <NavButton
        to={`/courses/${params.course}/${Number(params.id) - 1}`}
        disabled={isDisabled(Number(params.id) - 1)}
      >
        Previous
      </NavButton>
      <br />
      <br />
      <NavButton
        to={`/courses/${params.course}/${Number(params.id) + 1}`}
        disabled={isDisabled(Number(params.id) + 1)}
      >
        Next
      </NavButton>
    </div>
  )
}

export default WithTopBar(Task, 'full')
