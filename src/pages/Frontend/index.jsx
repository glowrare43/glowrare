import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import Contact from './Contact'
import Product from './Product'
import About from './About'
import Bundles from './Bundles'
import ProductDetails from './ProductDetails'
import Policies from './Policies'
import ScrollToTop from '../../utils/ScrollToTop'

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='bundles' element={<Bundles />} />
                    <Route path='products' element={<Product />} />
                    <Route path='productDetails/:slug' element={<ProductDetails />} />
                    <Route path='policies/*' element={<Policies />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend