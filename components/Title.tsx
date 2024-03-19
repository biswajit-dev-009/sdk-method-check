import React from 'react'

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className='text-3xl font-semibold mb-12'>{title}</h1>
  )
}

export default Title;