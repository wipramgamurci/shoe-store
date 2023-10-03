import { Container } from 'react-bootstrap'

import Product from '../components/Product'
import TopMenu from '../components/TopMenu'
import Navbar from '../components/Navbar'
import '../styles/style.css'

const ProductListPage = () => {
  return (
    <>
      <TopMenu />
      <Container>
        <Navbar />
        <div className="page-title mb-5">
          <p>New Releases</p>
        </div>
        <Product />
      </Container>
    </>
  )
}

export default ProductListPage
