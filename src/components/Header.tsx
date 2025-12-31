import "../styles/header.css"
import logo from "../assets/logo3.svg"

export const Header = () => {
  return (
    <header className="header">

      <div className="header-user">
        <img src={logo} alt="Logo header" />
      </div>
    </header>
  )
}
