import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"
      >
        <i className="material-icons-outlined">menu</i>
      </button>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
          <li>
            <a href="https://wa.me/+212708768573">whatsapp</a>
          </li>
        </ul>
      </nav>
      <button>
        <i className="material-icons-outlined">biadjust</i>
      </button>

      {showModal && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
              >
                
                <i className="material-icons-outlined">clear</i>
              </button>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">articles</a>
            </li>
            <li>
              <a href="">projects</a>
            </li>
            <li>
              <a href="">speaking</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
