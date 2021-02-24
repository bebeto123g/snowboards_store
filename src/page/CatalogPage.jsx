import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Col, Row } from 'react-bootstrap'
import Page from '../hoc/Page'

import LoaderPage from '../UI/Loader/LoaderPage'
import PageHeader from '../UI/PageHeader'

import CatalogCard from '../components/Catalog/Card'
import { loadCatalog, updateCatalog } from '../store/catalog/catalogActions'

const CatalogPage = () => {
  const { catalog } = useSelector((state) => state.catalog, shallowEqual)
  const { pageError } = useSelector((state) => state.pageLoading, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!catalog) {
      dispatch(loadCatalog())
    }
  }, [dispatch, catalog])

  useEffect(() => {
    return () => dispatch(updateCatalog())
  }, [dispatch])

  if (!catalog && !pageError) return <LoaderPage />

  return (
    <Page>
      <PageHeader>Каталог сноубордов</PageHeader>
      <Row>
        {catalog &&
          catalog.map((product) => (
            <Col className="p-2" md="6" lg="6" xl="4" key={product.id}>
              <CatalogCard {...product} />
            </Col>
          ))}
      </Row>
    </Page>
  )
}

export default CatalogPage
