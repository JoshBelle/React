import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count + 1)
  }

  const dec = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={inc}>Инкеремент</button>
      <button onClick={dec}>Дикремент</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
