import { NavLink, Outlet } from "react-router"

const AboutUs2 = () => {
  return (
    <div>
        <h2>About Us2</h2>
        <h3>
            <NavLink to="programer1" >Programer1</NavLink>
        </h3>
        <h3>
            <NavLink to="programer2" >Programer2</NavLink>
        </h3>
        <h3>
            <NavLink to="programer3" >Programer3</NavLink>
        </h3>
        <Outlet/>
    </div>
  )
}

export default AboutUs2
