import React, { FC, useContext } from 'react'
import Link from 'next/link'

import { UserContext } from '../auth/useLogin'
import { useCSR } from '../routing/useCSR'

const Home: FC = () => {
  const user = useContext(UserContext)
  console.log('index.tsx user:', user)

  const execRouting = useCSR()

  if (!execRouting) {
    return <p>loading...</p>
  }

  return (
    <>
      <p>Hello World!</p>
      <ul>
        <li>
          <Link href={'/about'}>go to about page</Link>
        </li>
        <li>
          <Link href={'/dynamic/1'}>go to dynamic/1 page</Link>
        </li>
        <li>
          <Link href={'/dynamic/2'}>go to dynamic/2 page</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
