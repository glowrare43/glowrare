import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import Contact from './Contact'
import Product from './Product'

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='product' element={<Product />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend