import BestVape from "../../assets/best-cbd-vape-icon.png"
import BestCBDEdible from "../../assets/best-cbd-edible-icon.png"
import BestCBDTopical from "../../assets/best-cbd-topical-icon.png"
import BestCBDTincture from "../../assets/best-cbd-tincture-icon.png"
import BestCBDFlower from "../../assets/best-cbd-flower-icon.png"
import BestCBDPet from "../../assets/best-cbd-pet-product-icon.png"
import BestCBDProduct from "../../assets/most-innovative-cbd-product-icon.png"
import BestCBDBranding from "../../assets/best-overall-branding-and-marketing-icon.png"
import Nomination from "../../components/partials/Nomination"
import '../../styles/categories.scss'

export default function Categories () {
    return (
        <div className="categories">
            <div className="categories__types">
                <h2>CATEGORIES</h2>
                <ul>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestVape} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Best CBD Vape</figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDEdible} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">
                                Best CBD Edible
                            </figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDTopical} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Best CBD Topical</figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDTincture} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Best CBD Tincture</figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDFlower} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Best CBD Flower</figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDPet} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Best CBD Pet Product</figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDProduct} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Most Innovative CBD Product</figcaption>
                        </figure>
                    </li>
                    <li className="awards__categories">
                        <figure>
                            <img className="awards__categories__images" src={BestCBDBranding} alt="Excellence Awards 2021" id="awardsLogo"/>
                            <figcaption className="awards__categories__titles">Best Overall Branding {"&"} Marketing</figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
            <form action="">
                <Nomination title="Nomination #1"/>
                <Nomination title="Nomination #2"/>
                <Nomination title="Nomination #3"/>
                <fieldset>
                    <legend> CONTACT INFO </legend>
                    <div className="contact">
                        <span className="ast">*</span>
                        <input type="text" id="" name="FirstName" placeholder="First Name" required></input>
                        <span className="ast">*</span>
                        <input type="tel" id="" name="Phone" placeholder="Phone" required></input>
                        <span className="ast">*</span>
                        <input type="email" id="" name="Email" placeholder="Email" required></input>
                    </div>
                </fieldset>
                <input type="submit" value="SUBMIT" id="button"></input>
            </form>
        </div>
    )
}
