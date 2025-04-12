import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = () => {
  return (
    <div className='bg-white dark:bg-[#080816] text-black dark:text-white min-h-screen w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
