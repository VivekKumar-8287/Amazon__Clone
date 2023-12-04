import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      // If user is present, sign out
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          alert("Sign-out successful.");
        })
        .catch((error) => {
          // An error happened.
          console.error(error.message);
        });
    } else {
      // If user is not present, handle sign-in or other actions
      // Add your sign-in logic or any other actions here
    }
  };

  return (
    <div className="header">
      <Link>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/* Logo */}
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span
              className="header_optionLineOne"
              style={{ fontSize: "14px", fontWeight: user ? "bold" : "normal" }}
            >
              Hello {!user ? "Guest" : user.email.split("@")[0]}
            </span>
            <span className="header_optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <AddShoppingCartIcon style={{ fontSize: "30px" }} />
            <span className="header_optionBasketLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
