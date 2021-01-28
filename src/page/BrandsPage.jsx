import React, { useEffect } from 'react'
import PageHeader from '../UI/PageHeader'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loadBrands } from '../store/brands/brandsActions'
import Loader from '../UI/Loader'
import styled from 'styled-components'

const Img = styled.img`
  width: 300px;
  margin-bottom: 30px;
`

const BrandsPage = () => {
  const dispatch = useDispatch()
  const { brands } = useSelector((state) => state.brands)
  const { loading } = useSelector((state) => state.loading)

  useEffect(() => {
    if (!brands) {
      dispatch(loadBrands())
    }
  }, [dispatch, brands])

  if (loading || !brands) return <Loader />

  return (
    <>
      <PageHeader>Лучшие брэнды</PageHeader>
      <Row>
        <ul>
          {Object.keys(brands).map((key) => {
            const { description, img, title } = brands[key]
            return (
              <li key={key}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Img src={img} />
                <hr/>
              </li>

            )
          })}
        </ul>
      </Row>
    </>
  )
}

export default BrandsPage
