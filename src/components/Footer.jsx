import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";

// ✅ Payment images import from assets
import payment1 from "../assets/payments/payment1.png";
import payment2 from "../assets/payments/payment2.png";
import payment3 from "../assets/payments/payment3.png";
import payment4 from "../assets/payments/payment4.png";
import payment5 from "../assets/payments/payment5.png";
import payment6 from "../assets/payments/payment6.png";
import payment7 from "../assets/payments/payment7.png";
import payment8 from "../assets/payments/payment8.png";
import payment9 from "../assets/payments/payment9.png";
import yourImage from "../assets/icons/yourImage.png";

export default function Footer() {
  return (
    <footer className="bg-white text-[#23264d] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-blue-900">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">How to Buy</a></li>
            <li><a href="#">Corporate & Bulk Purchasing</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Daraz Shop</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Purchase Protection</a></li>
            <li><a href="#">Daraz Pick up Points</a></li>
          </ul>
        </div>

        {/* Daraz Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Daraz</h3>
          <ul className="space-y-2 text-blue-900">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Digital Payments</a></li>
            <li><a href="#">Daraz Donates</a></li>
            <li><a href="#">Daraz Blog</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">NTN Number : 4012118-6</a></li>
            <li><a href="#">STRN Number : 1700401211818</a></li>
            <li><a href="#">Online Shopping App</a></li>
            <li><a href="#">Online Grocery Shopping</a></li>
            <li><a href="#">Daraz Exclusive</a></li>
            <li><a href="#">Daraz University</a></li>
            <li><a href="#">Sell on Daraz</a></li>
            <li><a href="#">Join Daraz Affiliate Program</a></li>
          </ul>
        </div>

        {/* App Promo */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/your-image.png"
              alt="Daraz Icon"
              className="w-8 h-8 object-contain"
            />
            <div>
              <p className="text-orange-500 font-medium">Happy Shopping</p>
              <a href="#" className="text-blue-900 underline">
                Download App
              </a>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/App_Store.svg/512px-App_Store.svg.png" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Huawei_AppGallery_badge_EN.svg" className="h-8" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white border-t border-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment */}
          <div>
            <h4 className="font-semibold mb-2">Payment Methods</h4>
            <div className="flex flex-wrap gap-2">
              <img src={payment1} className="h-6" />
              <img src={payment5} className="h-6" />
              <img src={payment2} className="h-6" />
              <img src={payment3} className="h-6" />
              <img src={payment4} className="h-6" />
              <img src={payment6} className="h-6" />
              <img src={payment7} className="h-6" />
              <img src={payment8} className="h-6" />
              <img src={payment9} className="h-6" />
            </div>
          </div>

          {/* Verified */}
          <div>
            <h4 className="font-semibold mb-2">Verified by</h4>
            <img src={yourImage} className="h-8" />
          </div>

          {/* Social + International */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-3 text-2xl text-[#1E1F29]">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaGlobe />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Daraz International</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                {[
                  { flag: "🇵🇰", name: "Pakistan" },
                  { flag: "🇧🇩", name: "Bangladesh" },
                  { flag: "🇱🇰", name: "Sri Lanka" },
                  { flag: "🇲🇲", name: "Myanmar" },
                  { flag: "🇳🇵", name: "Nepal" },
                ].map((country, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                      {country.flag}
                    </div>
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm text-gray-500 bg-white">
        © Daraz 2025
      </div>
    </footer>
  );
}
