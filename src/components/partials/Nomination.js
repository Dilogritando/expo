import '../../styles/categories.scss'

export default function Categories ({ title }) {
    return (
        <fieldset>
            <legend>{ title }</legend>
            <div className="nomination">
                <span className="ast">*</span>
                <select name="nomination_categories" id="" required>
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
                <span className="warning">*Votes for duplicate products will not be considered</span>
                <input type="text" id="" name="nominee1" placeholder="Write the product name here" required></input>
            </div>
        </fieldset>
    )
}
