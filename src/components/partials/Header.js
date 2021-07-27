import logoexpo from '../../../public/assets/logoexpo'
import '../../styles/header.css';

export default function Header () {
    return (
        <header>
            <div className="mainLogo">
                <img src={logoexpo} alt="Logo USA CBD EXPO" id="LogoExpo" />
            </div>
            <nav>
                <ul>
                    <li> <a href="#"> UPCOMING SHOWS </a></li>
                    <li> <a href="#"> BE A PART OF IT </a></li>
                    <li> <a href="#"> PAST SHOWS </a></li>
                    <li> <a href="#"> RESOURCES </a></li>
                    <li> <a href="#"> ABOUT US </a></li>
                    <li> <a href="#"> CONTACT US </a></li>
                </ul>
            </nav>
        </header>
    )
}
