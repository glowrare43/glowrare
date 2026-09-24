import { Route, Routes } from 'react-router-dom'
import Frontend from "../pages/Frontend"

const Routing = () => {
    return (
        <Routes>
            <Route path='/*' element={<Frontend />} />
        </Routes>
    )
}

export default Routing