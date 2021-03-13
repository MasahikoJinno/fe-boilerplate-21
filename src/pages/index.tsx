import React, { FC, useEffect, useState } from 'react'

const Home: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('hello console! count:', count)
    setCount(count + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>Hello World!</div>
      <p>count {count}</p>
    </>
  )
}

export default Home
