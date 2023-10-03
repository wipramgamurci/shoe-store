import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'
import { LiaShippingFastSolid } from 'react-icons/lia'


import appStore from '../AppStore'
import TopMenu from '../components/TopMenu'
import PrimaryButton from '../components/PrimaryButton'
import Navbar from '../components/Navbar'
import { BASE_URL } from '../constant'

const ProductDetailPage = () => {
  const navigate = useNavigate()

  return useObserver(() => {
    const { selectedProduct } = appStore
    const INITIAL_STATE = {
      selectedProduct: {
        ...selectedProduct,
        colors: null,
        sizes: null,
      },
    }
    const [detailState, setDetailState] = useState(INITIAL_STATE)

    const setSelectedSize = (item) => {
      setDetailState({
        selectedProduct: {
          ...detailState.selectedProduct,
          sizes: item,
        },
      })
    }

    const setSelectedColor = (item) => {
      setDetailState({
        selectedProduct: {
          ...detailState.selectedProduct,
          colors: item,
        },
      })
    }

    const handleAddItem = () => {
      const finalProduct = {
        ...detailState.selectedProduct,
        quantity: 1,
      }
      appStore.addToBag(finalProduct)
      navigate('/mybag')
    }

    return (
      <>
        <TopMenu />
        <Container>
          <Navbar />
          <Row className="align-items-center">
            <Col className="d-flex flex-column">
              <img
                width={515}
                height={600}
                src={BASE_URL + selectedProduct.name + '.png'}
                alt=""
              />
            </Col>
            <Col>
              <Row>
                <Col lg={12}>
                  <h4 className="font-size-16">{selectedProduct.category}</h4>
                </Col>
                <Col lg={12}>
                  <h1 className="fw-bold">{selectedProduct.name}</h1>
                </Col>
                <Col lg={12}>
                  <p>{selectedProduct.description}</p>
                </Col>
                <Col lg={12}>
                  <BsFillPlayCircleFill
                    className="cursor-pointer"
                    onClick={() => open(selectedProduct.video)}
                    size={48}
                  />
                  <span className="ms-3">PLAY VIDEO</span>
                </Col>
                <Col className="mt-4" lg={12}>
                  <span>SELECT SIZE (US)</span>
                </Col>
                <Col lg={7}>
                  {selectedProduct.sizes.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedSize(item)}
                        className={`size-box mt-2 justify-content-center align-items-center d-inline-flex ${
                          item === detailState.selectedProduct.sizes
                            ? 'selected-size'
                            : ''
                        }`}
                      >
                        {item}
                      </div>
                    )
                  })}
                </Col>
                <Col className="mt-4" lg={12}>
                  <span>SELECT COLOR</span>
                </Col>
                <Col>
                  <div className="color-picker">
                    {selectedProduct.colors.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => setSelectedColor(item)}
                          className={`color-circle ${
                            item.color_hash ===
                            detailState.selectedProduct.colors?.color_hash
                              ? 'selected-color'
                              : ''
                          }`}
                          style={{ backgroundColor: item.color_hash }}
                        ></div>
                      )
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={6}>
              <div className="d-flex justify-content-start gap-4 ">
                <img
                  width={100}
                  height={100}
                  src={BASE_URL + selectedProduct.name + '.png'}
                  alt=""
                />
                <img
                  width={100}
                  height={100}
                  src={BASE_URL + selectedProduct.name + '.png'}
                  alt=""
                />
                <img
                  width={100}
                  height={100}
                  src={BASE_URL + selectedProduct.name + '.png'}
                  alt=""
                />
                <img
                  width={100}
                  height={100}
                  src={BASE_URL + selectedProduct.name + '.png'}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 mb-3">
            <Col
              className="d-flex justify-content-between align-items-center bg-color-gray height-92"
              lg={12}
            >
              <div className='d-flex align-items-center gap-16'>
                <LiaShippingFastSolid size={20} />
                <span>FREE SHIPPING OVER $100 PURCHASE</span>
              </div>
              <PrimaryButton
                disabled={
                  !detailState.selectedProduct.colors ||
                  !detailState.selectedProduct.sizes
                    ? true
                    : false
                }
                text={`ADD TO BAG - $${detailState.selectedProduct.price}`}
                handleOnClick={handleAddItem}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  })
}

export default ProductDetailPage
