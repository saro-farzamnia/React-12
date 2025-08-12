import { Link, NavLink } from "react-router"


const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="about-us" >About Us</Link>
            </li>
            <li>
                <NavLink to="products" >Products</NavLink>
            </li>
            <li>
              <Link to="about-us2" >About Us2</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
