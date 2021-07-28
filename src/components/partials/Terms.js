import '../../styles/terms.scss'
export default function Terms () {
    return (
        <div className="terms">
            <div className="terms__list">
                <ol className="terms__list__proper">
                    <li>
                        <span className="terms__list__proper--numbers">1.</span>
                        <h3>Choose 3 of your favorite award categories…</h3>
                    </li>
                    <li>
                        <span className="terms__list__proper--numbers">2.</span>
                        <h3>Nominate a different product in each category…</h3>
                    </li>
                    <li>
                        <span className="terms__list__proper--numbers">3.</span>
                        <h3>Submit your form and wait for voting to begin!</h3>
                    </li>
                </ol>
            </div>
            <div className="terms__box">
                <h2>TERMS {"&"} CONDITIONS</h2>
                <div className="terms__box--inner">
                    <ul>
                        <li>
                            <div class="terms__box__items--container">
                                <p className="terms__box__items">
                                    NOMINATION
                                </p>
                                <p className="terms__box__items--desc">
                                You can nominate <span>UP TO 3 (THREE) DIFFERENT PRODUCTS.</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="terms__box__items--container">
                                <p className="terms__box__items">
                                    DUPLICATION
                                </p>
                                <p className="terms__box__items--desc">
                                All products must be different and each product can <span>ONLY</span> be in one category:
                                </p>
                                <p class="duplication_conditions">
                                    Product X <span> CAN </span> be nominated in <span>EITHER</span> Best CBD Edible <span>OR</span> Best CBD Flower.
                                </p>
                                <p className="duplication_conditions">
                                    Product X <span> CANNOT </span> be nominated in <span>BOTH</span> Best CBD Edible <span>AND</span> Best CBD Flower.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="terms__box__items--container">
                                <p className="terms__box__items">
                                    RESTRICTION
                                </p>
                                <p className="terms__box__items--desc">
                                <span>You must have a booth or sponsorship </span> at USA CBD EXPO Atlanta to qualify and win.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="terms__box__items--container">
                                <p className="terms__box__items">
                                    QUALIFICATION
                                </p>
                                <p className="terms__box__items--desc">
                                Nominations that do not meet the criteria listed in our terms will not qualify.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="terms__box__items--container">
                                <p className="terms__box__items">
                                    TIME
                                </p>
                                <p className="terms__box__items--desc">
                                Nominations will close on Friday, May 29th at XX PM EST.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="terms__box__items--container">
                                <p className="terms__box__items">
                                    VOTES
                                </p>
                                <p className="terms__box__items--desc">
                                Public voting begins June 1 through June 12, closing at 11:59 EST.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
