import './about.css'
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
function About() {
    return (
        <div className="about" >
            <div className="about-content" >
                <h4>WHY CHOOSE US</h4>
                <h1>Quality Furniture, Better Living  </h1>
                <p> At FurniHome, we believe that your home deserves the best. <br></br>
                    That's why we offer high-quality furniture with modern designs.<br></br>
                    comfortable feel and affordable prices</p>
                <div className="about-icon">
                    <div className="about-icon1">
                        <MdOutlineLocalShipping style={{ fontSize: "40px", border: "1px solid gray"  ,padding:"10px" ,borderRadius:"50%",color:"orange"}} />
                        <h3>Free Shipping</h3>
                        <p>On orders over $999</p>
                    </div>
                    <div className="about-icon2">
                        <IoShieldCheckmarkOutline style={{ fontSize: "40px", border: "1px solid gray" ,padding:"10px" ,borderRadius:"50%",color:"orange"}} />
                        <h3>Secure Payment</h3>
                        <p>100% secure & Safe</p>
                    </div>
                    <div className="about-icon3">
                        <TfiHeadphoneAlt style={{ fontSize: "40px", border: "1px solid gray" ,padding:"10px" ,borderRadius:"50%"}} />
                        <h3>Premium Quality </h3>
                        <p>Built to last</p>
                    </div>
                    <div className="about-icon4">
                        <MdOutlineWorkspacePremium style={{ fontSize: "40px", border: "1px solid gray" ,padding:"10px" ,borderRadius:"50%" ,color:"orange"}} />
                        <h3>24/7 Support</h3>
                        <p>We're here to help</p>
                    </div>
                </div>

            </div>
            <div className="about-image" >

                <img src="./about.jpg" ></img>


            </div>
        </div>
    )
}
export default About