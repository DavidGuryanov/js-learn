import React, { useState } from 'react'

export const Test = ({ data }: { data: any }) => {
  const [status, setStatus] = useState<null | boolean>(null)
  const variants = data.variants
  const results: string[] = []
  const handleChange = (e: any) => {
    // console.log(e, e.target.value)
    const index = results.indexOf(e.target.value)
    if (index === -1) {
      results.push(e.target.value)
    } else {
      results.splice(index, 1)
    }
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    let res = true
    if (!results.length) {
      res = false
    }
    variants.forEach((el: any) => {
      if (el.answer) {
        if (!results.find((element) => element === el.body)) {
          res = false
        }
      } else {
        if (results.find((element) => element === el.body)) {
          res = false
        }
      }
    })
    setStatus(res)
    return res
  }
  return (
    <form>
      <p>{data.text}</p>
      <div>
        {variants.map((element: any) => {
          return (
            <>
              <input
                type="checkbox"
                id={element.body}
                name={element.body}
                value={element.body}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor={element.body}>{element.body}</label>
              <br />
            </>
          )
        })}
      </div>
      <div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        <h2>{status === null ? null : status ? 'graz' : 'sorry'}</h2>
      </div>
    </form>
  )
}
