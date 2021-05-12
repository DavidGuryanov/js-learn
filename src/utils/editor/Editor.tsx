import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'

import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

interface ICode {
  defaultCode: string
  onMount: any
}

export const CodeEditor = ({ defaultCode, onMount }: ICode) => {
  function handleEditorValidation(markers: any) {
    // model markers
    markers.forEach((marker: any) => console.log('onValidate:', marker.message))
  }
  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      defaultValue={defaultCode}
      onMount={onMount}
      onValidate={handleEditorValidation}
    />
  )
}
