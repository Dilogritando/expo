import USACBDLOGO from "../../assets/logoexpo_dark.svg"
import '../../styles/footer.scss'
export default function Footer () {
    return (
        <footer id="footer">
            <div className="more">
                <ul className="upcoming">
                    <li className="more__title">UPCOMING SHOWS</li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/past-shows/atlanta-2021/">ATLANTA 2021</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/past-shows/colombia-2020/">MEDELLIN 2021</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/past-shows/colombia-2020/">CHICAGO 2021</a>
                    </li>
                </ul>
                <ul className="bepart">
                    <li className="more__title">BE A PART OF IT</li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/exhibitor-inquiry/">BECOME AN EXHIBITOR</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/sponsor-inquiry/">BECOME A SPONSOR</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/speaker-inquiry/">BECOME A SPEAKER</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/media-partner-inquiry/">BECOME A MEDIA PARTNER</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/tickets/">ATTEND</a>
                    </li>
                </ul>
                <ul className="past">
                    <li className="more__title">PAST SHOWS</li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/past-shows/miami-2019/">MIAMI 2019</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/past-shows/las-vegas-2020/">VEGAS 2020</a>
                    </li>
                </ul>
                <ul className="resources">
                    <li className="more__title">RESOURCES</li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/cbdnme/stories/">E-BOOKS</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/cbd-blog-news/">BLOGS {"&"} NEWS</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/press/">PRESS</a>
                    </li>
                </ul>
                <ul className="about">
                    <li className="more__title">
                        <a className="about" href="https://usacbdexpo.com/faq/">ABOUT US</a>
                    </li>
                </ul>
                <ul className="resources">
                    <li className="more__title">CONTACT US</li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/faq/">FAQ</a>
                    </li>
                    <li className="more__items">
                        <a href="https://usacbdexpo.com/about-us/">TAX {"&"} SAMPLING INFORMATION</a>
                    </li>
                </ul>
            </div>
            <figure>
                    <img src={USACBDLOGO} alt="USA CBD Expo logo" id="cbdLogo"/>
                    <figcaption>USA CBD Expo Logo</figcaption>
            </figure>
        </footer>
    )
}
