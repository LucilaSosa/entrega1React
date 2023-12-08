import CardWidget from "./CardWidget"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id="navbar">
        {/* brand */}
        <h1>PS</h1>
        {/* listado de listado de categorias clickeables*/}
        <ul>
            <li>
                <a href="">SOMMIER</a>
            </li>
            <li>
                <a href="">CAMAS</a>
            </li>
            <li>
                <a href="">DIVANES</a>
            </li>
            <li>
                <a href="">COLCHONES</a>
            </li>
            <li>
                <a href="">MUEBLES</a>
            </li>
        </ul>
        <CardWidget/>
    </div>
  )
}

export default Navbar