import './footer.css';
import { FaHome, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">

            <div className="innerfooter">
                <h1>
                    <FaHome className="home-icon" />
                    Furni<span>Home</span>
                </h1>

                <p>
                    Your Home. Our Passion.
                </p>

                <div className="social-icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>

            <div className="innerfooter">
                <h2>Quick Links</h2>

                <p>
                    Home<br />
                    Shop<br />
                    About<br />
                    Contact
                </p>
            </div>

            <div className="innerfooter">
                <h2>Customer Service</h2>

                <p>
                    FAQs<br />
                    Shipping Policy<br />
                    Privacy Policy<br />
                    Return Policy
                </p>
            </div>

            <div className="innerfooter">
                <h2>Contact Us</h2>

                <p>
                    <b>Email:</b> info@furnihome.com<br />
                    <b>Phone:</b> +91 98765 43210<br />
                    <b>Address:</b> Amritsar, Punjab
                </p>
            </div>

        </div>
    );
}

export default Footer;