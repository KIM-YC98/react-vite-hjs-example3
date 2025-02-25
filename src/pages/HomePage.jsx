import { Link } from 'react-router-dom'
import routes from '../route/Routes'

const Header = () => {
  return (
    <div className='text-center mt-3'>
      {routes.map((route, index) =>
        //prettier-ignore
        <Link key={route.path || index} to={route.path}>
         {' '}{route.title}{' '}|
        </Link>,
      )}
    </div>
  )
}

export default Header
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './route/Routes'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => {
            return <Route key={route.path || index} path={route.path} element={route.element}></Route>
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
//React Routes, Route 사용시 배열로 관리하기
const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
]
export default routes
import React from 'react'

const HomePage = () => {
  return <h1 className='text-center mt-5'>메인페이지 입니다.</h1>
}

export default HomePage