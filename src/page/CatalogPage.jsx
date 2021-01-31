import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Loader from '../UI/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { loadCatalog } from '../store/catalog/catalogActions'
import ProductCard from '../components/ProductCard'
import PageHeader from '../UI/PageHeader'

const ColProduct = styled(Col)`
  padding: 15px;
`

const CatalogPage = () => {
  const { loading } = useSelector((state) => state.loading)
  const { catalog } = useSelector((state) => state.catalog)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!catalog) {
      dispatch(loadCatalog())
    }
  }, [dispatch, catalog])

  if (loading || !catalog) return <Loader />

  return (
    <>
      <PageHeader>Каталог сноубордов</PageHeader>
      <Row>
        {catalog.map((product) => (
          <ColProduct md="6" lg="6" xl="4" key={product.id}>
            <ProductCard {...product} />
          </ColProduct>
        ))}
      </Row>
    </>
  )
}

export default CatalogPage
