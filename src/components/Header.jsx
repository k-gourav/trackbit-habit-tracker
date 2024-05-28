import logo from '../assets/logo.png'
import hamburger from '../assets/menu.png'
import notif from '../assets/notification-bell.png'
import '../App.css'

const Header = () => (
    // <header>
    //     <div className="top-section">
    //         <div className="logo-container">
    //             <img className='logo' src={logo} alt="logo-image" />
    //         </div>
    //         <div className="nav-items">
    //             <ul>
    //                 <li><a href="">Home</a></li>
    //                 <li><a href="">Create</a></li>
    //                 <li><a href="">Explore</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </header>
    <header>
            <div className="nav-items">
                <h1>Hello, <span>Kumar👋</span></h1>
            </div>
    </header>
)

export default Header;