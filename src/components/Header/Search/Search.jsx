import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/headphone-prod-2.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="pro-details">
              <span className="name">Product name</span>
              <span className="prod-description">Product details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
