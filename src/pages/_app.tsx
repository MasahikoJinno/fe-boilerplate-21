import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import getConfig from 'next/config'
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/analytics'

import { useLogin, UserContext } from '../auth/useLogin'

const firebaseConfig = getConfig()?.publicRuntimeConfig?.firebase?.config

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const App: FC<AppProps> = ({ Component }) => {
  const [authStateChecked, user, login] = useLogin()

  if (!authStateChecked) {
    return <p>...loading</p>
  }

  return (
    <>
      <Head>
        <title>my next app</title>
      </Head>
      {process.browser && (
        <UserContext.Provider
          value={{
            user,
            login
          }}
        >
          <Component />
        </UserContext.Provider>
      )}
    </>
  )
}

export default App
