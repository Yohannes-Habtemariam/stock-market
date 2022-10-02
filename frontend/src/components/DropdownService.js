import React, { useState } from 'react';
import { ServicesMenuItems } from '../data/menuItems';
import { Link } from 'react-router-dom';


const DropdownService = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
      <div>
        <ul onClick={handleClick} className={click ? "dropdown-menu-service clicked" : "dropdown-menu-service"}>
          {
            ServicesMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link 
                  to={item.path} 
                  onClick={() => setClick(false)} 
                  className={item.cName}
                > 
                  {item.title}
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
}

export default DropdownService;
