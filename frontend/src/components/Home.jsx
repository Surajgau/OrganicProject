import React from 'react'
import cookies from "js-cookie"

const Home = () => {
  // const getToken=JSON.parse(cookies.get("userInfo"))
  // console.log(getToken,"getToken")
    // const getToken=JSON.parse(sessionStorage.getItem("user"))
      // console.log(getToken,"getTokenkk  ")

    // const getToken=JSON.parse(localStorage.getItem("user"))
    //   console.log(getToken,"getToken")
    
    const getd=cookies.get("user")?JSON?.parse(cookies.get("user")):null;
    console.log(getd,"cokkie")


  return (
   <>

  <div className="small-container">
    <div className="row row-2">
      <h2>All Products</h2>
      <select>
        <option value="">Default Shorting</option>
        <option value="">Short by price</option>
        <option value="">Short by popularity</option>
        <option value="">Short by rating</option>
        <option value="">Short by sale</option>
      </select>
    </div>
    <div className="row">
      <div className="col-4">
        <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <img src="https://i.ibb.co/nw5xZwk/product-9.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/9HCsmjf/product-10.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/JQ2MBHR/product-11.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/nRZMs6Y/product-12.jpg" alt="" />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
    </div>
    <div className="page-btn">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>→</span>
    </div>
  </div>
  {/* Footer */}
  
</>

  
  )
}

export default Home
