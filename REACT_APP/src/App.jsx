//class component 
//function component
import './App.css'
import Product from './components/Product.jsx'
import Navbar from './components/navbar.jsx'
import Userslist from './components/Userslist.jsx'
import Footer from './components/footer.jsx'
function App(){
  //state

  //return react element
  return(
    <div>
      <Navbar>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {produc}
        </div>
      </Navbar>
        <div>Users</div>
        <div>Footer</div>
    </div>
  )
  
}
export default App