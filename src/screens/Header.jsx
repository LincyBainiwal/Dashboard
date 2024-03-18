import React from 'react';
import '../styles/header.css';
import Logo from '../components/Header/Logo';
import SearchBar from '../components/Header/SearchBar';
import Nav from '../components/Header/Nav';


function Header() {
  return(
     <header id="header" className="header fixed-top align-items-center">
     {/* {logo} */}
     <Logo />
       {/* {search bar} */}
       <SearchBar/>
          {/* {nav} */}
          <Nav/>
     </header>
  )
}

export default Header;
