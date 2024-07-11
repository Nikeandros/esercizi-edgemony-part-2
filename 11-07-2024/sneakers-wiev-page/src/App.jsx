import React, { useState } from 'react';
import './App.css';
import mainImage from './assets/images/image-product-1.jpg';
import thumbnail1 from './assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from './assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from './assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from './assets/images/image-product-4-thumbnail.jpg';
import cartIcon from './assets/icons/icon-cart.svg';
import profileIcon from './assets/images/image-avatar.png';


const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [activeThumbnail, setActiveThumbnail] = useState(mainImage);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);
  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
    setActiveThumbnail(image);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo" ><img src={cartIcon} alt="Cart" className="cart-icon" /></h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="cart-profile">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          <img src={profileIcon} alt="Profile" className="profile-icon" />
        </div>
      </header>

      <main className="main-content">
        <div className="product-images">
          <img src={currentImage} alt="Main" className="main-image" />
          <div className="thumbnail-images">
            <img src={thumbnail1} alt="Thumbnail 1" className={`thumbnail ${activeThumbnail === thumbnail1 ? 'active' : ''}`} onClick={() => handleThumbnailClick(thumbnail1)} />
            <img src={thumbnail2} alt="Thumbnail 2" className={`thumbnail ${activeThumbnail === thumbnail2 ? 'active' : ''}`} onClick={() => handleThumbnailClick(thumbnail2)} />
            <img src={thumbnail3} alt="Thumbnail 3" className={`thumbnail ${activeThumbnail === thumbnail3 ? 'active' : ''}`} onClick={() => handleThumbnailClick(thumbnail3)} />
            <img src={thumbnail4} alt="Thumbnail 4" className={`thumbnail ${activeThumbnail === thumbnail4 ? 'active' : ''}`} onClick={() => handleThumbnailClick(thumbnail4)} />
          </div>
        </div>
        <div className="product-details">
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div className="price">
            <span className="current-price">$125.00</span>
            <span className="discount">50%</span>
            <span className="original-price">$250.00</span>
          </div>
          <div className="quantity-selector">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </main>
    </div>
  );
};

export default App;
