import Router from 'next/router'
import { useState, useEffect } from 'react'

import { APP_ROUTES } from './route'

export const useCSR = (): boolean => {
  const [execRouting, setExecRouting] = useState(false)

  useEffect(() => {
    const {
      location: { pathname }
    } = window

    const isCSR = APP_ROUTES.some(route => {
      if (new RegExp(`^${route.pattern}$`).test(pathname)) {
        Router.replace(route.href, pathname).then()
        return true
      }
    })

    !isCSR && setExecRouting(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return execRouting
}
