import { useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { useObserver } from 'mobx-react-lite'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import appStore from '../AppStore'
import { BASE_URL, URL } from '../constant'

const INITIAL_STATE = {
  isLoading: false,
}

const Product = () => {
  const navigate = useNavigate()
  const [productState, setProductState] = useState(INITIAL_STATE)

  return useObserver(() => {
    useEffect(() => {
      const fetchProduct = () => {
        setProductState({
          ...productState,
          isLoading: true,
        })
        axios
          .get(URL)
          .then(function (response) {
            const shoesData = response.data.shoes
            appStore.updateProduct(shoesData)
          })
          .catch(function (error) {
            console.log(error)
          })
          .finally(function () {
            setProductState({
              ...productState,
              isLoading: false,
            })
          })
      }
      fetchProduct()
    }, [])

    return (
      <Row className="justify-content-center mb-3">
        {productState.isLoading ? (
          <Spinner animation="border" role="status" />
        ) : (
          appStore.product.map((item, index) => {
            const handleClick = () => {
              navigate('/detail')
              appStore.updateSelectedProduct(item)
            }
            return (
              <Col lg={3} key={index}>
                <Card className="mt-5 cursor-pointer" onClick={handleClick}>
                  <Card.Img variant="top" src={BASE_URL + item.name + '.png'} />
                  <Card.Body>
                    <Row>
                      <Col md={8}>
                        <Card.Title className="h6">{item.name}</Card.Title>
                      </Col>
                      <Col md={4} className=' text-align-right'>
                        <span className="font-size-12 ms-2 color-gray">
                          ${item.price}
                        </span>
                      </Col>
                    </Row>
                    <Card.Text className="font-size-14 color-gray">
                      {item.category}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        )}
      </Row>
    )
  })
}

export default Product
