import "./sidebar.css";
import {
  FaWallet,
  FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { TbLogout2 } from "react-icons/tb";
import logo from "../../assets/logo.png";
import { FiHome, FiSearch } from "react-icons/fi";
import { MdOutlineAddBox, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <nav className={`sidebar`}>
      <div className="menu-bar">
        <div className={`image-text`}>
          <img src={logo} alt="Logo" />
          <h2>BrainBox</h2>
        </div>
        {/* <div className="text">BrainBox</div> */}
        {/* <div className="menu-bar"> */}
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/">
                <FiHome className="icon" />
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/search">
                <FiSearch className="icon" />
                <span className="text nav-text">Search</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/notification">
                <FaRegHeart className="icon" />
                <span className="text nav-text">Notifications</span>
              </Link>
            </li>{" "}
            <li className="nav-link">
              <Link to="/message">
                <MdOutlineMailOutline className="icon" />
                <span className="text nav-text">Messages</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/wallet">
                <IoWalletOutline className="icon" />
                <span className="text nav-text">Wallets</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/create">
                <MdOutlineAddBox className="icon" />
                <span className="text nav-text">Create</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/profile">
                <HiOutlineUser className="icon" />
                <span className="text nav-text">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
        <div className="bottom-content">
          <li className="">
            <Link
              to="#"
              onClick={() => {
                logout();
              }}
            >
              <TbLogout2 className="icon" />
              <span className="text nav-text">Logout</span>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
