import { Col, Row } from 'react-bootstrap'
import { BiShoppingBag, BiUserCircle } from 'react-icons/bi'
import { useObserver } from 'mobx-react-lite'
import { useLocation, useNavigate } from 'react-router-dom'

import { BASE_URL } from '../constant'
import appStore from '../AppStore'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return useObserver(() => {
    return (
      <Row className="top-nav mb-5">
        <Col lg={3}>
          <img
            className="cursor-pointer"
            onClick={() => navigate('/')}
            src={'.' + BASE_URL + 'logo.png'}
            alt=""
            width={58}
          />
        </Col>
        <Col
          lg={6}
          className="d-flex fw-semibold font-size-16 justify-content-center"
        >
          <ul>
            <li className={`${location.pathname === '/' ? 'menu-active' : ''}`}>
              <a href="">New Releases</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Kids</a>
            </li>
            <li>
              <a href="">Customize</a>
            </li>
          </ul>
        </Col>
        <Col className="d-flex gap-16 justify-content-end" lg={3}>
          <div className="right-icon">
            <BiShoppingBag
              className="cursor-pointer"
              onClick={() => navigate('/mybag')}
              size={24}
            />
            <span className="badge">
              {appStore.myBagCount < 1 ? '' : appStore.myBagCount}
            </span>
            <BiUserCircle className="ms-2" size={24} />
          </div>
        </Col>
      </Row>
    )
  })
}

export default Navbar
