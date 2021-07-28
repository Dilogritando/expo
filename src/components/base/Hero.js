import CBDAwards from '../../assets/awards-logo.png'
import Countdown from '../../components/partials/Countdown'
import '../../styles/hero.scss'

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero__main">
                <figure>
                    <img src={CBDAwards} alt="Excellence Awards 2021" id="awardsLogo"/>
                    <figcaption>
                        CBD Expo Excellence Awards for 2021
                        </figcaption>
                </figure>
                <h1 className="hero__main--text">
                    Nominate your brand for <br/>
                    a chance to win an award <br/>
                    at USA CBD Expo Atlanta!
                </h1>
            </div>
            <div className="hero__countdown">
                <p>NOMINATION ENDS IN</p>
                <Countdown />
            </div>
        </div>
    )
}
