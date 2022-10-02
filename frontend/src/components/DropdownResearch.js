import React, { useState } from 'react';
import { ResearchMenuItems } from '../data/menuItems';
import { Link } from 'react-router-dom';


const DropdownService = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
      <div>
        <ul onClick={handleClick} className={click ? "dropdown-menu-research clicked" : "dropdown-menu-research"}>
          {
            ResearchMenuItems.map((item, index) => {
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