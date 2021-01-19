import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import Loader from '../UI/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { loadCatalog } from '../store/catalog/catalogActions'
import ProductCard from '../components/ProductCard'

const ColProduct = styled(Col)`
  padding: 15px;
`

const CatalogPage = () => {
  const { loading } = useSelector((state) => state.loading)
  const { catalog } = useSelector((state) => state.catalog)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('effect catalog page')
    if (!catalog) {
      console.log('fetch json')
      dispatch(loadCatalog())
    }
  }, [dispatch, catalog])

  if (loading) return <Loader />
  if (!catalog)
    return <h1 className="text-center">Ошибка загрузки каталога...</h1>

  return (
    <>
      <Row className="d-flex justify-content-center my-2">
        <h1>Каталог сноубордов</h1>
      </Row>
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
