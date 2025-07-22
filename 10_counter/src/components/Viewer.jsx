import React from 'react'

const Viewer = ({count}) => {
  return (
    <div>
        <div className="">현재 카운트: </div>
        <h1>{count}</h1>
    </div>
  )
}

export default Viewer