import React from "react";

interface Props {
  menu: boolean;
}

const Menu = ({ menu }: Props) => {
  if (menu) {
    return <div className="w-screen h-screen absolute">Menu</div>;
  }
  return null;
};

export default Menu;
