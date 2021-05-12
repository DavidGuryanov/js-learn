import React from 'react'

export const Iframe = ({ src }: { src: string }) => {
  const id = (str: string) => {
    return str.split('youtu.be')[1]
  }
  id(src)
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed${id(src)}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
