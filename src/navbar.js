
import React, {useState} from 'react';
import './ui/navbar.scss';


export default function NavBar({clickAdd}) {
  const [isDropMenuOpen, toggleDropMenu] = useState(false);
  const [navBarClasses, setNavBarClasses] = useState("topnav");

  const onEvent = e => {
    if(navBarClasses === "topnav")
      setNavBarClasses("topnav responsive");
    else 
      setNavBarClasses("topnav");
    toggleDropMenu(!isDropMenuOpen);
    console.log("CLICK");
  }

  return (
    <div className={navBarClasses}>
      <a href="/">WZ</a>
      <a onClick={clickAdd}>Add Book</a>
      <a href="javascript:void(0);" className="icon" onClick={onEvent}>
          <i className="fa fa-bars"></i>
        </a>
  </div>
  )
}