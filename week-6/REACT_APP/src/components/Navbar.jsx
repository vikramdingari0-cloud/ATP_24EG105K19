import Footer from "./footer"
import Userslist from "./Userslist"

function Navbar(){
    return(
        <div className="flex justify-between items-center bg-amber-400  text-white px-6 py-3 shadow-md">
            <h1 className="text-2xl font-bold red"></h1>
            <input 
                type="text" placeholder="search users" className="px-3 py-1 rounded text-black w-1/3 hidden md:block"/>
            <div>
                <button className="bg-amber-50 text-red-400 px-3 py-1 rounded" > search Users </button>
                <img src="" alt="" className="w-8 h-8 rounded-full border-2 border-b-blue-600" /> 
            </div>

        </div>

    )
}
export default Navbar