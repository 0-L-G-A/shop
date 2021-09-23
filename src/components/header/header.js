import React from "react";
import HeaderMenu from "./menu";
import HeaderLogo from "./logo";

function Header(headerData) {
  return (
    <div className="header">
      <HeaderLogo
        url={"https://placekitten.com/g/64/64"}
        text={"Hello Kitty"}
      />
      <HeaderMenu />
    </div>
  );
}

export default Header;
