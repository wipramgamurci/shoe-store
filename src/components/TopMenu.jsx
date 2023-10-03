import { Col, Container, NavDropdown, Row } from 'react-bootstrap'
import { LiaShippingFastSolid } from 'react-icons/lia'

const TopMenu = () => {
  return (
    <div className="bg-color-light-gray font-size-12">
      <Container>
        <Row className="d-flex align-items-center py-2">
          <Col>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="English"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#">Indonesia</NavDropdown.Item>
              <NavDropdown.Item href="#">English</NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <LiaShippingFastSolid size={24} />
            <span className="ms-2">FREE SHIPPING OVER $100 PURCHASE</span>
          </Col>
          <Col>
            <ul className="list-style-none flex flex-end gap-16 font-size-12">
              <li>
                <a href="">Shipping</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopMenu
