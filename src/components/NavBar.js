import React from "react";

class NavBar extends React.Component {
  render() {
    const links = ["home", "about", "projects"];
    
    return (
      <nav>
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </nav>
    );
  }
}

export default NavBar;