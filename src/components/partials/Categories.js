import BestVape from "../../../public/assets/best-cbd-vape-icon"
import BestCBDEdible from "../../../public/assets/best-cbd-edible-icon"
import BestCBDTopical from "../../../public/assets/best-cbd-topical-icon"
import BestCBDTincture from "../../../public/assets/best-cbd-tincture-icon"
import BestCBDFlower from "../../../public/assets/best-cbd-flower-icon"
import BestCBDPet from "../../../public/assets/best-cbd-pet-product-icon"
import BestCBDProduct from "../../../public/assets/most-innovative-cbd-product-icon"
import BestCBDBranding from "../../../public/assets/best-overall-branding-and-marketing-icon"


export default function Categories () {
    return (
        <>
        <div className="categories__types">
            <h2>CATEGORIES</h2>
            <ul>
                <li className="awards_categories">
                    <figure>
                        <img src={BestVape} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Best CBD Vape</figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDEdible} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">
                            Best CBD Edible
                        </figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDTopical} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Best CBD Topical</figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDTincture} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Best CBD Tincture</figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDFlower} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Best CBD Flower</figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDPet} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Best CBD Pet Product</figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDProduct} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Most Innovative CBD Product</figcaption>
                    </figure>
                </li>
                <li className="awards_categories">
                    <figure>
                        <img src={BestCBDBranding} alt="Excellence Awards 2021" id="awardsLogo"/>
                        <figcaption className="awards__categories__titles">Best Overall Branding {"&nbsp;"} Marketing</figcaption>
                    </figure>
                </li>
            </ul>
        </div>
        <form action="">
            <fieldset>
                <legend>Nomination #1</legend>
                <select name="nomination_categories" id="">
                    <option value="placeholder">Select the category</option>
                    <option value=""></option>
                </select>
                <input type="text" id="" name=""></input>
            </fieldset>
            <fieldset>
                <legend>Nomination #2</legend>
                <select name="nomination_categories" id="">
                    <option value="placeholder">Select the category</option>
                    <option value=""></option>
                </select>
                <input type="text" id="" name=""></input>
            </fieldset>
            <fieldset>
                <legend>Nomination #3</legend>
                <select name="nomination_categories" id="">
                    <option value="placeholder">Select the category</option>
                    <option value=""></option>
                </select>
                <input type="text" id="" name=""></input>
            </fieldset>
        </form>
        </>
    )
}
