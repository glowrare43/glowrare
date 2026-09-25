import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import Contact from './Contact'
import Product from './Product'
import About from './About'
import Bundles from './Bundles'

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='product' element={<Product />} />
                    <Route path='bundles' element={<Bundles />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend