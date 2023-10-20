import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Free Shipping, Cash on Delivery, EMI Offers and Top Deals. - Headphones- Upto 80% Off on Headphones Online. Choose from a wide range of Headphones
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop More</div>
                    </div>
                </div>
                <img  className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
