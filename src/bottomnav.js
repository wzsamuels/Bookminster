
import React, {useState} from 'react';
import './ui/bottomnav.scss';


export default function BottomNav({clickAdd}) {
  const [isDropMenuOpen, toggleDropMenu] = useState(false);
  const [navBarClasses, setNavBarClasses] = useState("bottom-nav");

  const onEvent = e => {
    if(navBarClasses === "bottom-nav")
      setNavBarClasses("bottom-nav responsive");
    else 
      setNavBarClasses("bottom-nav");
    toggleDropMenu(!isDropMenuOpen);
    console.log("CLICK");
  }

  return (
    <div className="bottom-nav">
      <button className="circle"><i className="icon" onClick={clickAdd} class="fa fa-plus-circle fa-5x"></i></button>
    </div>
  )
}

/*
<div className="search-container">
        <form action="/action_page.php">      
          Search by: Title <input type="radio" id="SearchByTitle" name="SearchType" value="title" checked/> Author <input
          type="radio" id="SearchByAuthor" name="SearchType" value="author"/>      
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
*/