import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter {counter} </h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
