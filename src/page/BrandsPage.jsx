import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Row } from 'react-bootstrap'
import Page from '../hoc/Page'

import PageHeader from '../UI/PageHeader'

import { loadBrands } from '../store/brands/brandsActions'
import LoaderPage from '../UI/Loader/LoaderPage'
import BrandsCards from '../components/BrandsCards'

const BrandsPage = () => {
  const { brands } = useSelector((state) => state.brands, shallowEqual)
  const { pageError } = useSelector((state) => state.pageLoading, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!brands) {
      dispatch(loadBrands())
    }
  }, [dispatch, brands])

  if (!brands && !pageError) return <LoaderPage />

  return (
    <Page>
      <PageHeader>Лучшие брэнды</PageHeader>
      <Row>
        {brands && <BrandsCards brands={brands} />}
      </Row>
    </Page>
  )
}

export default BrandsPage
