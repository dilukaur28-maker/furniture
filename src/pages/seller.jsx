import './seller.css'
function Seller() {
    return (
        <div className="seller" >
            <div className="seller-content" >
                <h4>FEATURED PRODUCTS</h4>
                <h1>Our Best Sellers</h1>
                <p>Discover furniture pieces by our customers.</p>

            </div>
            <div className="seller-image" >
                <div className="seller1">
                    <img src="./living.jpg" alt="Living Room"></img>
                    <p>Modern Sofa</p>
                    <h3>RS 24,000</h3>
                   <h4>⭐⭐⭐⭐⭐(4.8)</h4>
                </div>
                <div className="seller2">
                    <img src="./bed.jpg" alt="Bedroom"></img>
                    <p>Wooden Bed</p>
                    <h3>RS 15,000</h3>
                    <h4>⭐⭐⭐⭐⭐(4.7)</h4>
                </div>
                <div className="seller3">
                    <img src="./dinnig.jpg" alt="Dining Room"></img>
                    <p>Dining Table Set</p>
                    <h3>RS 29,000</h3>
                    <h4>⭐⭐⭐⭐⭐(4.6)</h4>

                </div>
                <div className="seller4">
                    <img src="./office.jpg" alt="Office"></img>
                    <p>Office Chair</p>
                    <h3>RS 12,000</h3>
                   <h4>⭐⭐⭐⭐⭐(4.5)</h4>

                </div>
            </div>
        </div>
    )
}
export default Seller