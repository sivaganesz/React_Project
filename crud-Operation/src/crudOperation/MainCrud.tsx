import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainCrud = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainCrud