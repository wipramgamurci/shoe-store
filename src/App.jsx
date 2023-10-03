import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import MyBagPage from './pages/MyBagPage'
import './styles/style.css'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/detail" element={<ProductDetailPage />} />
        <Route path="/mybag" element={<MyBagPage />} />
      </Routes>
    </Router>
  )
}
