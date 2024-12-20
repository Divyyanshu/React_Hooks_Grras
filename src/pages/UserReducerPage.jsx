import React from 'react'
import { useReducer } from 'react'

const UserReducerPage = () => {
  // Step 1 . create initial object

  const initialState = {
    count: 0,
  }
  // step 2 . reducer function and with paramenter {state,action}

  function reducer(state, action) {
    console.log(state, action)
    if (action.type === 'increment') {
      return { count: state.count + 1 }
    } else if (action.type === 'decrement') {
      return { count: state.count - 1 }
    }
  };
  // Step 3 . crate state state and dispatech

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <>
      <div className='h-screen bg-slate-900'>
        <p className='text-6xl font-bold m-10 text-center text-white'>{state.count}</p>
        <div className='flex gap-20 mx-10'>
          <button className='bg-green-900 rounded-lg px-8 py-2 border text-white' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
          <button className='bg-red-900 rounded-lg px-8 py-2 border text-white' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
      </div>
    </>

  )
}

export default UserReducerPage