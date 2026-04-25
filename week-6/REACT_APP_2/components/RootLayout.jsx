import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router'
function RootLayout() {
  return (
    <div>
    <Header />
    {/* placeholder */}
    <div className='min-h-screen mx-16 bg-red-400' >
      <Outlet/>
    </div>

    <Footer />
    </div>
)
}

export default RootLayout