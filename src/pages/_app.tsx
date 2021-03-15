import React from 'react'
import _App from 'next/app'
import Head from 'next/head'
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/analytics'

firebase.initializeApp({})

type Props = {}

export class App extends _App<Props> {
  render() {
    const { Component } = this.props

    return (
      <>
        <Head>
          <title>my next app</title>
        </Head>
        <Component />
      </>
    )
  }
}

export default App
