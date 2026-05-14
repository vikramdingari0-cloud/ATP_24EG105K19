import Header from './Header'
import { Outlet } from 'react-router'

function Rootlayout() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto">
          <Outlet />
        </main>
    </div>
  )
}

export default Rootlayout