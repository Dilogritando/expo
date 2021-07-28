import logoexpo from '../../assets/logoexpo.svg'
import '../../styles/header.scss';

export default function Header () {
    return (
        <header>
            <div className="header__logo">
                <img className="header__logo__proper" src={logoexpo} alt="Logo USA CBD EXPO" id="header__logo__proper" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li> <a href="#footer"> UPCOMING SHOWS </a></li>
                    <li> <a href="#footer"> BE A PART OF IT </a></li>
                    <li> <a href="#footer"> PAST SHOWS </a></li>
                    <li> <a href="#footer"> RESOURCES </a></li>
                    <li> <a href="#footer"> ABOUT US </a></li>
                    <li> <a href="#footer"> CONTACT US </a></li>
                </ul>
            </nav>
        </header>
    )
}
