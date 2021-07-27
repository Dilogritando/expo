import CBDAwards from '../../../public/assets/awards-logo'
import Countdown from '../../components/partials/Countdown'
import '../../styles/hero.css'

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero_main">
                <figure>
                    <img src={CBDAwards} alt="Excellence Awards 2021" id="awardsLogo"/>
                    <figcaption>CBD Expo Excellence Awards for 2021</figcaption>
                </figure>
                <div class="hero_main--text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aliquam error magni obcaecati, quidem aliquid dignissimos eligendi sunt eum architecto, natus, sint qui sed sapiente dolor? Saepe culpa error excepturi</p>
                </div>
            </div>
            <div className="hero_countdown">
                <p>Texto generico aquí</p>
                <div>
                    <Countdown />
                </div>
            </div>
        </div>
    )
}
