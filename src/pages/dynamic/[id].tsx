import React, { FC } from 'react'
import { useRouter } from 'next/router'

type Props = {}

const Dynamic: FC<Props> = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <p>dynamic routing</p>
      <p>id: {id}</p>
    </>
  )
}

export default Dynamic
