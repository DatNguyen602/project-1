import React from 'react'
import counterReducer, { decrement, increment } from '../redux/counter'
import { useDispatch } from 'react-redux'

const Counter = () => {
  const dispath = useDispatch();
  const handleIncrement = () => {
    dispath(increment());
  }
  const handleDecrement = () => {
    dispath(decrement());
  }
  return (
    <div>
      <div className="col-12 text-center mt-5">
        <button type='button'
          onClick={handleIncrement}
          className='bg-primary px-4 py-1'>
          Tăng
        </button>
        <button type='button'
          onClick={handleDecrement}
          className='bg-primary px-4 py-1 ms-4'>
          Giảm
        </button>
      </div>
    </div>
  )
}

export default Counter