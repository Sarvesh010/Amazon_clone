import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  return (
    <div className='header'>
        <Link to ='/'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header_logo"/>
        </Link>

        <div className="header_location">
            {/*location logo*/}
            <PlaceIcon className="header_placeIcon"/>
            <div className="header_optionLocation">
              <span className="header_optionLineOne">Hello</span>
              <span className="header_optionLineTwo">Select your address</span>
            </div>
        </div>

        <div className="header_search">
          <input className="header_searchInput" type="text" />
          {/*searchIcon*/}
          <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
          <Link to={!user && '/Login'}>
          <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">Hello, sign in {user ? 'sign Out' : 'sign in'}</span>
              <span className="header_optionLineTwo">Account & Lists </span>
          </div>
          </Link>
          <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
          </div>

          <Link to="/checkout">
          <div className="header_optionBasket">
              {/*shoppingCart*/}
              <ShoppingCartIcon className="header_basket" />
              <span className="header_optioneTwo header_basketCount">{basket?.length}</span>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Header;
