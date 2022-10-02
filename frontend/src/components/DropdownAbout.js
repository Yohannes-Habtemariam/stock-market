import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Dropdown.css"
import { AboutMenuItems } from '../data/menuItems';

const DropdownAbout = () => {
  const [click, setClick] = useState(false);

  const smallScreenNavbarControl = () => setClick(!click);
  
  return (
    <div>
      <ul onClick={smallScreenNavbarControl} className={click ? "dropdown-menu-about clicked" : "dropdown-menu-about"}>
        {
          AboutMenuItems.map((menu, index) => {
          return (
            <li key={index} >
              <Link 
                to={menu.path}
                onClick={() => setClick(false)}
                className={menu.cName}
              > 
                {menu.title}
              </Link>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default DropdownAbout;