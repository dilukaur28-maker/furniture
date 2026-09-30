import './category.css'

function Category() {
    return (
        <div className="category">

            <div className="category-content">
                <h4>OUR COLLECTION</h4>
                <h1>Explore Our Categories</h1>
                <p>
                    Find the perfect furniture to make every space in your home beautiful.
                </p>
            </div>

            <div className="category-container">

                <div className="category-large">
                    {/* <img src="./living.jpg" alt="Living Room" />
                    <div className="category-text">
                        <h2>Living Room</h2>
                        <p>Comfortable furniture for your living space</p>
                        <button>Explore Now</button>
                    </div> */}
                     <img src="./bed.jpg" alt="Bedroom" />
                        <div className="category-text">
                            <h2>Bedroom</h2>
                        <p>Comfortable furniture for your living space</p>

                            <button>Shop Now</button>
                        </div>
                </div>

                <div className="category-small">

                    <div className="category-card">
                        <img src="./living.jpg" alt="Living Room" />
                    <div className="category-text">
                        <h2>Living Room</h2>
                        <p>Comfortable furniture for your living space</p>
                        <button>Explore Now</button>
                    </div>
                        {/* <img src="./bed.jpg" alt="Bedroom" />
                        <div className="category-text">
                            <h2>Bedroom</h2>
                            <button>Shop Now</button>
                        </div> */}
                    </div>

                    <div className="category-card">
                        <img src="./dinnig.jpg" alt="Dining Room" />
                        <div className="category-text">
                            <h2>Dining Room</h2>
                            <button>Shop Now</button>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="./office.jpg" alt="Office" />
                        <div className="category-text">
                            <h2>Office</h2>
                            <button>Shop Now</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Category