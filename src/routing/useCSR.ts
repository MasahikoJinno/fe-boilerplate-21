import { useState, useEffect } from 'react'
import Router from 'next/router'

import { APP_PATHS } from './paths'

export const useCSR = (): boolean => {
  const [execRouting, setExecRouting] = useState(false)

  useEffect(() => {
    const {
      location: { pathname }
    } = window

    const isCSR = APP_PATHS.some(async path => {
      if (new RegExp(`^${path.pattern}$`).test(pathname)) {
        await Router.replace(path.href, pathname)
        return true
      }
    })

    !isCSR && setExecRouting(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return execRouting
}
