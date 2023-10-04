import { useObserver } from 'mobx-react-lite'
import { TiDelete } from 'react-icons/ti'
import { Col, Container, Row } from 'react-bootstrap'

import { BASE_URL } from '../constant'
import appStore from '../AppStore'
import TopMenu from '../components/TopMenu'
import Navbar from '../components/Navbar'
import PrimaryButton from '../components/PrimaryButton'

const MyBagPage = () => {
  return useObserver(() => {
    const { myBag, grandTotal } = appStore
    const buttonStyle = {
      width: '400px',
      height: '52px',
      justifyContent: 'space-between',
    }

    return (
      <>
        <TopMenu />
        <Container>
          <Navbar />
          <div className="page-title">
            <p>Your Bag </p>
          </div>
          <Row className="mb-2 height-50 bg-color-light-gray align-items-center font-size-12">
            <Col lg={6} className="text-center">
              <span>PRODUCT</span>
            </Col>
            <Col lg={6} className="d-flex justify-content-around">
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </Col>
          </Row>
          {myBag.map((item, index) => {
            return (
              <Row className="mt-2" key={index}>
                <Col lg={6} className="d-flex align-items-center">
                  <TiDelete
                    onClick={() => appStore.removeItemFromBag(index)}
                    size={24}
                    className="cursor-pointer"
                  />
                  <img
                    src={'.' + BASE_URL + item.name + '.png'}
                    width={150}
                    height={150}
                    className="ms-5"
                  />
                  <Row className="ms-5 align-items-center font-size-16">
                    <Col className="mb-3 fw-semibold" lg={12}>
                      {item.name}
                    </Col>
                    <Col className="fw-normal " lg={4}>
                      Size: {item.sizes}
                    </Col>
                    <Col
                      lg={5}
                      className="d-flex justify-content-start fw-normal"
                    >
                      Color
                      <div
                        className="ms-2 mybag-color"
                        style={{ backgroundColor: item.colors.color_hash }}
                      ></div>
                    </Col>
                  </Row>
                </Col>
                <Col
                  lg={6}
                  className="d-flex justify-content-around align-items-center"
                >
                  <span>${item.price}</span>
                  <input
                    className="width-50"
                    type="number"
                    name="quantity"
                    onChange={(event) =>
                      appStore.updateQuantity(index, event.target.value)
                    }
                    value={item.quantity}
                  />
                  <span>${item.price * item.quantity}</span>
                </Col>
              </Row>
            )
          })}
          <Row className="mt-5 mb-2 justify-content-end">
            <Col
              className="height-64 width-400 bg-color-light-gray d-flex justify-content-between align-items-center"
              lg={4}
            >
              <span>TOTAL</span>
              <span>${grandTotal}</span>
            </Col>
          </Row>
          <Row className="justify-content-end mb-3">
            <PrimaryButton
              text="PAY NOW"
              handleOnClick={() => console.log('Pay')}
              style={buttonStyle}
            />
          </Row>
        </Container>
      </>
    )
  })
}

export default MyBagPage
