import React from 'react'

const ResponseCard: React.FC<{ response: string }> = ({ response }) => {
  return (
    <div className='p-20 bg-white text-black border border-black min-w-96 min-h-96'>{response}</div>
  )
}

export default ResponseCard;