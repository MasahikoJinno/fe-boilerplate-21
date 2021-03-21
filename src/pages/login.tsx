import React, { FC, useContext } from 'react'
import { UserContext } from '../auth/useLogin'

const Login: FC = () => {
  const { login } = useContext(UserContext)

  return (
    <>
      <p>ログイン画面</p>
      <button
        onClick={() => {
          login && login()
        }}
      >
        Twitterログイン
      </button>
    </>
  )
}

export default Login
