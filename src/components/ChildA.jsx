import React, { useContext } from 'react'




import { dataFirst } from './App.js'
function ChildA() {
    const name = useContext(dataFirst)
  return (
    <h1>{name}</h1>
  )
}

export default ChildA;