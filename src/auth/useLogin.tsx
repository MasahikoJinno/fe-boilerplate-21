import { useState, useEffect, useCallback, createContext } from 'react'
import Router from 'next/router'
import firebase from 'firebase/app'

type ReturnVoidFunc = () => void

type Result = [
  /** 認証が完了したかどうか */
  boolean,
  /** ユーザ情報 */
  firebase.User | null,
  /** ログイン用の関数 */
  ReturnVoidFunc
]

type Context = {
  user: firebase.User | null
  login: ReturnVoidFunc | null
}

const defaultValue = {
  user: null,
  login: null
}

export const UserContext = createContext<Context>(defaultValue)

export const useLogin = (): Result => {
  const [checked, setChecked] = useState(false)
  const [user, setUser] = useState<firebase.User | null>(null)

  const execLogin = useCallback(() => {
    ;(async () => {
      const provider = new firebase.auth.TwitterAuthProvider()
      try {
        await firebase.auth().signInWithPopup(provider)
        const user = firebase.auth().currentUser
        console.log('user:', user)
        if (user) {
          await Router.push('/')
        }
      } catch (e) {
        console.log('err:', e)
      }
    })()
  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        setUser(user)
        console.log('useEffect user:', user)
      } else {
        await Router.push('/login')
      }
      setChecked(true)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [checked, user, execLogin]
}
