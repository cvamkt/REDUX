
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './Features/counter/counter'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleInc() {
    dispatch(increment())
  }

  function handleDec() {
    dispatch(decrement())
  }

  function handlereset() {
    dispatch(reset())
  }
  function handleByAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleInc}> +</button>
      <p>Count :{count}</p>
      <button onClick={handleDec}> - </button>
      <br /><br />
      <button onClick={handlereset}> RESET </button>
      <br /><br />

      <input 
      type="Number" 
      value={amount}
      placeholder='Enter Amount'
      onChange={(e) => setAmount(e.target.value)}
      
      />

      <br /><br />
      <button onClick={handleByAmount}> Inc by Amount</button>


    </div>
  )
}

export default App
