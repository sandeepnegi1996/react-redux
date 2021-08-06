import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'
import { addMilestone } from './actions'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const milestonesParent = useSelector((state) => state.milestones)

  return (
    <div>
      {/* <h1>Counter {counter} </h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}

      <h1>
        This is App component with milestones global state:{' '}
        {milestonesParent.milestones.length}
      </h1>

      <button
        onClick={() =>
          dispatch(
            addMilestone({
              name: 'latestmilestone',
              description: 'this is latest milestone',
              amount: '45',
            })
          )
        }
      >
        Add milestones
      </button>

      <h3>
        {milestonesParent.milestones.map((item) => (
          <p>{item.name}</p>
        ))}
      </h3>
    </div>
  )
}

export default App
