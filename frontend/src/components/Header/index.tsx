import logo from '../../assets/img/logo.svg'
import './style.css'
function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="" />
                <h1>Soft Meta</h1>
                <p>Desenvolvido por <a href="https://github.com/keelcoutinho">@keelcoutinho</a></p>
            </div>
        </header>
    )
}

export default Header

