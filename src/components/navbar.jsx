import './navbar.css'
import { CiSearch } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

function Navbar() {
    return(
    <div className="nav">
        <h1><FaHome style={{font:"30px"}} />Furni<span style={{color:"#92610c"}}>Home</span></h1>
        <ul>
            <li>Home</li>
             <li>Shop</li>
            <li>About</li>
           
            <li>Contact</li>
        </ul>
        <div className='icons'>
        <CiSearch />
        <MdPerson />
        <IoCartOutline />
</div>
    </div>
    )
}
export default Navbar