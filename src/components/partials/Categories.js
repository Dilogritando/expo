import BestVape from "../../assets/best-cbd-vape-icon.png"
import BestCBDEdible from "../../assets/best-cbd-edible-icon.png"
import BestCBDTopical from "../../assets/best-cbd-topical-icon.png"
import BestCBDTincture from "../../assets/best-cbd-tincture-icon.png"
import BestCBDFlower from "../../assets/best-cbd-flower-icon.png"
import BestCBDPet from "../../assets/best-cbd-pet-product-icon.png"
import BestCBDProduct from "../../assets/most-innovative-cbd-product-icon.png"
import BestCBDBranding from "../../assets/best-overall-branding-and-marketing-icon.png"
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
                <fieldset>
                    <legend>Nomination #1</legend>
                    <div className="nomination">
                        <select name="nomination_categories" id="">
                            <option value="placeholder">Select the category</option>
                            <option value="vape">Best CBD Vape</option>
                            <option value="edible">Best CBD Edible</option>
                            <option value="topical">Best CBD Topical</option>
                            <option value="tincture">Best CBD Tincture</option>
                            <option value="flower">Best CBD Flower</option>
                            <option value="pet">Best CBD Pet Product</option>
                            <option value="innovative">Most innovative CBD Product</option>
                            <option value="branding">Best Overall Branding and Marketing</option>
                        </select>
                        <input type="text" id="" name="nominee1" placeholder="Write the product name here"></input>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Nomination #2</legend>
                    <div className="nomination">
                        <select name="nomination_categories" id="">
                            <option value="placeholder">Select the category</option>
                            <option value="placeholder">Select the category</option>
                            <option value="vape">Best CBD Vape</option>
                            <option value="edible">Best CBD Edible</option>
                            <option value="topical">Best CBD Topical</option>
                            <option value="tincture">Best CBD Tincture</option>
                            <option value="flower">Best CBD Flower</option>
                            <option value="pet">Best CBD Pet Product</option>
                            <option value="innovative">Most innovative CBD Product</option>
                            <option value="branding">Best Overall Branding and Marketing</option>
                        </select>
                        <input type="text" id="" name="nominee2" placeholder="Write the product name here"></input>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Nomination #3</legend>
                    <div className="nomination">
                        <select name="nomination_categories" id="">
                        <option value="placeholder">Select the category</option>
                            <option value="vape">Best CBD Vape</option>
                            <option value="edible">Best CBD Edible</option>
                            <option value="topical">Best CBD Topical</option>
                            <option value="tincture">Best CBD Tincture</option>
                            <option value="flower">Best CBD Flower</option>
                            <option value="pet">Best CBD Pet Product</option>
                            <option value="innovative">Most innovative CBD Product</option>
                            <option value="branding">Best Overall Branding and Marketing</option>
                        </select>
                        <input type="text" id="" name="nominee3" placeholder="Write the product name here"></input>
                    </div>
                </fieldset>
                <fieldset>
                    <legend> CONTACT INFO </legend>
                    <div className="contact">
                        <input type="text" id="" name="FirstName" placeholder="First Name"></input>
                        <input type="tel" id="" name="Phone" placeholder="Phone"></input>
                        <input type="email" id="" name="Email" placeholder="Email"></input>
                    </div>
                </fieldset>
                <input type="submit" value="SUBMIT" id="button"></input>
            </form>
        </div>
    )
}
