import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import PageError from '../page/PageError'

const Page = ({ children }) => {
  const { pageError } = useSelector((state) => state.pageLoading, shallowEqual)

  if (pageError) return <PageError />

  return <>{children}</>
}

export default Page
