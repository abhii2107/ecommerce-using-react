import { FaHeart } from "react-icons/fa";
import { SiZerodha, SiStripe, SiShopify, SiAmazon } from "react-icons/si";

export const Trusted = () => {
  return (
    <section className="trusted-section">
      <div className="container">

        <p className="trusted-text">
          Trusted By 1000+ Companies
        </p>

        <div className="trusted-logos">
          <span>ZEINA</span>
          <span>LOGIC+</span>
          <FaHeart />
          <span>CHARTZ</span>
          <SiZerodha />
          <SiStripe />
          <SiShopify />
          <SiAmazon />
        </div>

      </div>
    </section>
  );
};